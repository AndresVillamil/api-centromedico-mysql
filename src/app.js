import express from 'express';
import morgan from 'morgan';
//Routes

import citasRoutes from './routes/citasroutes';

const app = express();

//Setting
app.set("port", 4000);

//Middleware
app.use(morgan("dev"))
app.use(express.json())
//Routes
app.use('/api/v1/pacientes',citasRoutes);


export default app