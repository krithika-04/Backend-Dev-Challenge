import { Request, Response, NextFunction } from 'express';
import { ExtendedRequest } from '../types/expressRequest';

export const contextMiddleware = (req: ExtendedRequest, res: Response, next: NextFunction) => {
  req.context = {
    userId:""
  };

  next();
};

// for storing context data for protected routes 
