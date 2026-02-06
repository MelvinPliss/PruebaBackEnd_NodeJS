import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers;
    const userAgent = header["user-agent"];

    console.log("user-agent", userAgent);
    
    next();
    // se utiliza para que ejecute la funcion que sigue 
    // despues de aqui, es decir, el controlador en este caso 
    next();
}

export { logMiddleware } 