import pool from "../database/connection"
import { Auth } from "../interfaces/auth.interface";
import { verified } from "../utils/encrypt.handler";
import { generarToken } from "../utils/jwt.handler";

const loginUser = async ({ NombreUsuario, Clave }: Auth) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE nombre_usuario = ?', [NombreUsuario]); 

        if ((rows as any[]).length > 0) { 
            const usuario = (rows as any[])[0]; 

            // Encriptado 
            const user = usuario.nombre_usuario;   
            const claveBD = usuario.clave;

            // Se verifica que clave recibida sea igual 
            // a la clave del usuario de la BD(claveBD)
            const isCorrect = await verified(Clave, claveBD);

            if (!isCorrect) return "CLAVE INCORRECTA";

            const token = generarToken(user.id_usuario, user.nombre_usuario, user.rol);

            return token; 
        } 
        else { 
            return "USUARIO NO ENCONTRADO";
        }
    } catch (error) {
        return "ERROR";
    }
};

export { loginUser }