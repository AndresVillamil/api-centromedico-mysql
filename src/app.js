import express from 'express';
import morgan from 'morgan';
//Routes

import pacientesRoutes from './routes/pacientesroutes';

const app = express();

//Setting
app.set("port", 4000);
app.set('view engine', 'ejs');

//Middleware
app.use(morgan("dev"))
app.use(express.json())


//Routes
app.use('/api/v1/pacientes',pacientesRoutes);


export default app