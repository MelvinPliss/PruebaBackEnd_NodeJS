import { Response } from "express";
import { RequestEndpoint } from "../interfaces/req-endpoint";
import {
    actualizarAlumno,
    agregarAlumno,
    borrarAlumno,
    buscarPorId,
    buscarPorNombreApellido,
    buscarTodos,
} from "../services/alumno.service";
import { ResponseEndpoint } from "../interfaces/res-endpoint";

const agregarAlumnoCtrl = async ({ body }: RequestEndpoint, res: Response) => {
    let resultado: ResponseEndpoint<number> = { Status: true };
    
    try {
        const respuesta = await agregarAlumno(body);

        if (respuesta.status === 0){
            resultado.Status = false;
            resultado.Msg = respuesta.msg;

            res.status(400).send(resultado);
        }
        else {
            resultado.Value = respuesta.msg;
            res.send(resultado)
        }
    } catch (error: any) {
        resultado.Msg = error.message;
        resultado.Status = false;
        res.status(500).send(resultado);
    }
}

const actualizarAlumnoCtrl = async ({ body, params }: RequestEndpoint, res: Response) => {
    let resultado: ResponseEndpoint<number> = { Status: true };
    const { id } = params;

    body.id_alumno = id;

    try {
        const respuesta = await actualizarAlumno(body);

        if (respuesta.status === 0){
            resultado.Status = false;
            resultado.Msg = respuesta.msg;

            res.status(400).send(resultado);
        }
        else {
            resultado.Value = 0;
            resultado.Msg = respuesta.msg;
            res.send(resultado)
        }
    } catch (error: any) {
        resultado.Msg = error.message;
        resultado.Status = false;
        res.status(500).send(resultado);
    }
}

const buscarPorIdCtrl = async ({ body, params }: RequestEndpoint, res: Response) => {
    const { id } = params;
    const resultado = await buscarPorId(id);
    res.send(resultado);
}

const buscarTodosCtrl = async (req: RequestEndpoint, res: Response) => {
    const resultado = await buscarTodos();
    res.send(resultado);
}

const buscarPorNombreApellidoCtrl = async ({query}: RequestEndpoint, res: Response) => {
    const { nombre, apellido_paterno, apellido_materno } = query;
    const resultado = await buscarPorNombreApellido(nombre?.toString(), apellido_paterno?.toString(), apellido_materno?.toString());
    res.send(resultado);
}

const borrarAlumnoCtrl = async ({ params }: RequestEndpoint, res: Response) => {
    const { id } = params;
    console.log(id);
    let resultado: ResponseEndpoint<number> = { Status: true };

    try {
        const respuesta = await borrarAlumno(id);
        if (respuesta === 0) {
            resultado.Status = false;
            resultado.Msg = "Registro No Existe";
            res.status(404).send(resultado);
        }
        else {
            resultado.Value = respuesta;
            resultado.Msg = "Registro Eliminado";
            res.send(resultado);
        }
    } 
    catch {
        res.status(500).json({ error: 'Error al eliminar alumno' });
    }
}

export { 
    buscarPorIdCtrl, 
    buscarTodosCtrl, 
    buscarPorNombreApellidoCtrl,
    actualizarAlumnoCtrl, 
    agregarAlumnoCtrl,
    borrarAlumnoCtrl
}
