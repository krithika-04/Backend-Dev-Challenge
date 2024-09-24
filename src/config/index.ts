import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 8000,
    publicHost:process.env.PUBLIC_HOST,
    mongoUrl:process.env.MONGO_URL||"", 
    secretKey:process.env.SECRET_KEY||""
};
