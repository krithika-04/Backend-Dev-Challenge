import { Request, Response, NextFunction } from 'express';
import { formatErrorResponse } from '../utils/formatter';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  return res.status(statusCode).json(formatErrorResponse(message));
};

export { errorHandler };