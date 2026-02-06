import { Request, Response } from 'express';
import { loginUser } from '../services/auth.service';

const loginCtrl = async ({ body }: Request, res: Response) => {
    const { NombreUsuario, Clave } = body;
    const responseUser = await loginUser({ NombreUsuario, Clave });

    if (responseUser === "USUARIO NO ENCONTRADO" || responseUser === "CLAVE INCORRECTA") {
        res.status(403);
        res.send(responseUser);
    } else if (responseUser === "ERROR") {
        res.status(500);
        res.send("ERROR AL INICIAR SESION");
    } else {
        res.send(responseUser);
    }
}

export { loginCtrl }
