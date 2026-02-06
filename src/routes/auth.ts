import { Request, Response, Router } from "express";
import { loginCtrl } from "../controllers/auth"
const router = Router();

// http://localhost:3002/auth/login [POST]
router.post('/login', loginCtrl);

export { router };
