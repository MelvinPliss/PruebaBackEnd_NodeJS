import { Router } from "express";
import { buscarPorIdCtrl, buscarTodosCtrl, buscarPorNombreApellidoCtrl, agregarAlumnoCtrl, actualizarAlumnoCtrl, borrarAlumnoCtrl } from "../controllers/alumnos";
import { checkJwt } from "../middlewares/session";
import { validarAlumnoActualizar, validarAlumnoCrear } from "../middlewares/alumnos.middleware";

const router = Router();

router.get('/', buscarTodosCtrl);
router.get('/:id', buscarPorIdCtrl);
router.get('/buscar', buscarPorNombreApellidoCtrl);

router.post('/', checkJwt, validarAlumnoCrear,  agregarAlumnoCtrl);
router.put('/:id', checkJwt, validarAlumnoActualizar, actualizarAlumnoCtrl);
router.delete('/:id', checkJwt, borrarAlumnoCtrl);

export { router }
