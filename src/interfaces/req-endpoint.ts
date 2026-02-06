import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface RequestEndpoint extends Request {
    user?: JwtPayload | { username: string, role: string };
}