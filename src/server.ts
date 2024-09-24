import app from "./app";
import dotenv from 'dotenv';
import { config } from "./config";
import logger from "./utils/logger";
import { mongoConnect } from "./config/mongoConnect";
dotenv.config();
const PORT = process.env.PORT ||config.port|| 8000 ;

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        logger.info(`Server running on port ${PORT}`);
    });
};


mongoConnect().then(()=>startServer())