
import { Request } from 'express';
import { RequestContext } from './requestContext';

export interface ExtendedRequest extends Request {
  context?: RequestContext;
}
