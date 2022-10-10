import * as handlers from '../../handlers/movie_handler'
import MovieModel from '../../models/Movie_model'
import express from 'express'

const store = new MovieModel()
const routes = express.Router()

routes.post('/', handlers.create)
routes.get('/', handlers.index)
routes.get('/:id', handlers.get)
routes.delete('/:id', handlers.remove)
routes.patch('/:id', handlers.update)
routes.post('/fix', store.fixIds)

export default routes
