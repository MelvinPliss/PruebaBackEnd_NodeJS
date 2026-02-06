import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/index"

const PORT = process.env.PORT || 3001

const app = express();
app.use(cors());

// Esta linea es para que la app pueda
// recibir datos en formato JSON
app.use(express.json());
// Esta linea es para que use el router del archivo 
// index que maneja las rutas/URLs de la aplicacion
// y van comenzar las rutas con /api 
app.use("/api", router);
app.listen(PORT, () => console.log("Listo para escuchar: "+PORT));
