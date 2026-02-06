import { ResultSetHeader } from "mysql2";
import pool from "../database/connection"
import { Alumno } from "../models/alumno";

const actualizarAlumno = async (data: Alumno) => {
    const [rows] = await pool.query( 'CALL SP_ACTUALIZAR_ALUMNO(?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [data.id_alumno, data.matricula, data.nombre, data.apellido_paterno, 
            data.apellido_materno, data.fecha_de_nacimiento, data.estatus, data.genero, data.id_grado]); 
    const resultado = (rows as any[])[0][0]; // primer resultado 
    return resultado; 
}

const agregarAlumno = async (data: Alumno) => {
    const [rows] = await pool.query( 'CALL SP_CREAR_ALUMNO(?, ?, ?, ?, ?, ?, ?, ?)', 
        [data.matricula, data.id_alumno, data.nombre, data.apellido_paterno, 
            data.apellido_materno, data.fecha_de_nacimiento, data.estatus, data.genero, data.id_grado]); 
    const resultado = (rows as any[])[0][0]; // primer resultado 
    return resultado; 
}

const buscarPorId = async (id: string) => {
    try {
        const [rows] = await pool.query('SELECT * FROM alumnos WHERE id = ?', [id]); 
        return (rows as any[])[0] || null;

    } catch (error) {
        return [];
    }
}

const buscarPorNombreApellido = async (nombre?: string, apellidoPaterno?: string, apellidoMaterno?: string) => {
    try {
        let query = 'SELECT * FROM alumnos WHERE 1=1'; 
        const params: any[] = []; 
        if (nombre) { 
            query += ' AND nombre = ?'; params.push(nombre); 
        } 
        if (apellidoPaterno) { 
            query += ' AND apellido_paterno = ?'; 
            params.push(apellidoPaterno); 
        } 
        if (apellidoMaterno) { 
            query += ' AND apellido_materno = ?'; 
            params.push(apellidoMaterno); 
        } 
        
        const [rows] = await pool.query(query, params); 
        return rows;       
    } catch (error) {
        return [];
    }
}


const buscarTodos = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM alumnos'); 
        return rows;
    } catch (error) {
        return [];
    }
}

const borrarAlumno = async (id: string) => {
    const [result] = await pool.query<ResultSetHeader>('DELETE FROM alumnos where id_alumno = ?', [id]);
    return result.affectedRows;
}

export { 
    buscarPorId, 
    buscarTodos, 
    buscarPorNombreApellido,
    actualizarAlumno, 
    agregarAlumno,
    borrarAlumno
}