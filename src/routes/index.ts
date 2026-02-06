import { Router } from "express";
import { readdirSync } from "fs"
// __dirname es una constante que va devolver la ruta del directorio
// actual
const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanNombreArchivo = (nombreArchivo: string) => {
    const archivo = nombreArchivo.split('.').shift();
    return archivo;
}

// CARGADOR DINAMICO DE RUTAS DEL API
readdirSync(PATH_ROUTER).filter((nombreArchivo) => {
    const cleanName = cleanNombreArchivo(nombreArchivo);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            // El router el nombre de esta ruta
            // el cleanname(es decir item.ts)
            // moduleRouter.router
            console.log("Se esta cargando la ruta... "+cleanName);
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});


export { router };
