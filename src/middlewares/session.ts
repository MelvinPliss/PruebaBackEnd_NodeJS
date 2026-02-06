import { Request, Response, NextFunction } from "express"
import { verificarToken } from "../utils/jwt.handler";
import { RequestEndpoint } from "../interfaces/req-endpoint";
import { TokenExpiredError } from "jsonwebtoken";

const checkJwt = (req: RequestEndpoint, res: Response, next: NextFunction) => {
    try {
        const jwtUser =  req.headers.authorization || "";
        const jwt = jwtUser.split(" ").pop();
        const esUsuario = verificarToken(`${jwt}`) as { username: string, role: string };
        
        // Si esUsuario tiene valor, significa que el jwt es valido
        // y procedera a ir a la siguiente accion, que proviene
        // en este caso, del controlador al que punta la peticion  
        if (esUsuario) {
            // se guarda el usuario del jwt que realizo la peticion
            // en el request para que al llegar al controlador
            // pueda identificar el usuario si lo necesita
            req.user = esUsuario;
            next();
        }

    } catch (e) {
        if (e instanceof TokenExpiredError) {
            res.status(401);
            res.send("ACCESO NO AUTORIZADO. JWT INVALIDO");
        } else {
            res.status(400);
            res.send("ACCESO NO AUTORIZADO. ERROR EN TU PETICION");
        }        
    }
};

const checkIsAdmin = (req: RequestEndpoint, res: Response, next: NextFunction) => {
    if (req.user!.role == "ADMINISTRADOR") {
        next();
    }        
    else {
        res.status(403);
        res.send("ACCESO NO AUTORIZADO. PROHIBIDO SU ACCESO");
    }    
};

export { checkJwt, checkIsAdmin }
