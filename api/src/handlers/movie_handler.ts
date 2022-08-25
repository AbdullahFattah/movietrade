import MovieModel from '../models/Movie_model'
import { Request, Response, NextFunction } from 'express'

const store = new MovieModel()

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const index = await store.indexMovie()
    res.json(index)
  } catch (err) {
    next(err)
  }
}

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movie = await store.addMovie(req.body)
    res.json({
      Action: 'Add movie',
      Data: { ...movie },
      Status: 'Success',
    })
  } catch (err) {
    next(err)
  }
}

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const get = await store.getMovie(req.params.id)
    res.json(get)
  } catch (err) {
    throw new Error(`Unable to get movie: ${err}`)
  }
}

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const remove = await store.deleteMovie(req.params.id)
    res.json(remove)
  } catch (err) {
    throw new Error(`Unable to delete movie: ${err}`)
  }
}
