import { Request, Response, NextFunction } from "express";
import { ExtendedRequest } from "../types/expressRequest";
import jwt from "jsonwebtoken";

const secretKey = "wysa-secret-key";

export const authenticateToken = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    if (req.context) {
      req.context.userId = user.userId;
    }
    next();
  });
};
