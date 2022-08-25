import * as handlers from '../../handlers/movie_handler';
import express from 'express';

const routes = express.Router();

routes.post("/",handlers.create);
routes.get("/",handlers.index);
routes.get("/:id", handlers.get);


export default routes;