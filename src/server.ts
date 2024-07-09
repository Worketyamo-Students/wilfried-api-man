/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 05/07/2024 - 16:37:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/07/2024
    * - Author          : Hp
    * - Modification    : 
**/
// src/server.ts
// Configurations de Middlewares
import express from 'express';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { setupSwagger } from './swagger';
import morgan from 'morgan';
import { ONE_HUNDRED, SIXTY } from './core/constants';
import routerProject from './routes/projet.routes';
import routerFactures from './routes/factures.routes';
import routerUser from './routes/user.routes';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(
	rateLimit({
		max: ONE_HUNDRED,
		windowMs: SIXTY,
		message: 'Trop de Requete à partir de cette adresse IP '
	})
);
app.use("/user",routerUser)
app.use("/factures",routerFactures)
app.use("/projet",routerProject)
app.use(morgan('combined'));
setupSwagger(app);
export default app;
