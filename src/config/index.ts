import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 8000,
    publicHost:process.env.PUBLIC_HOST,
    mongoUrl:process.env.MONGO_URL||"",
    redisHost:process.env.REDIS_HOST,
    redisPort:process.env.REDIS_PORT
};
