import express from 'express';
import movieRoute from './api/movie_routes';
const routes = express.Router();

routes.use("/movies", movieRoute)

export default routes;