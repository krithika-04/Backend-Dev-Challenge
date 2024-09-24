import express from 'express';
import cors from 'cors';
import routes from './routes';
import { setupSwagger } from './config/swagger';
import { contextMiddleware } from './middlewares/contextMiddleware';
import { errorHandler } from './middlewares/errorHandler';


const app = express();
// Use the response formatter middleware globally

app.use(contextMiddleware);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
setupSwagger(app);
// Use the error handler middleware globally
app.use(errorHandler);
  
app.use('/api',routes)

export default app;