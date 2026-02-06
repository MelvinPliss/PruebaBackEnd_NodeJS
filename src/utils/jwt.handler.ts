import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.SECRET";

const generarToken = (id: string, nombre: string, rol: string) => {
  const jwt = sign({ "nameid": id, "username": nombre, "role": rol }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return jwt;
};

const verificarToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

export { generarToken, verificarToken };