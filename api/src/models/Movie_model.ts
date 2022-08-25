import Client from '../database'
import Movie from '../types/Movie_type'

export default class MovieModel {
  async addMovie(m: Movie): Promise<Movie> {
    try {
      const conn = await Client.connect()
      const sql =
        'INSERT INTO movies(title, description, price) VALUES ($1,$2,$3) RETURNING *'
      const result = await conn.query(sql, [m.title, m.description, m.price])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to add movie: ${err}`)
    }
  }

  async indexMovie(): Promise<Movie[]> {
    try {
      const conn = await Client.connect()
      const sql = 'SELECT * FROM movies'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to view movies: ${err}`)
    }
  }

  async getMovie(id: string) {
    try {
      const conn = await Client.connect()
      const sql = 'SELECT * FROM movies WHERE id=($1)'
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get movie: ${err}`)
    }
  }

  async deleteMovie(id: string) {
    try {
      const conn = await Client.connect()
      const sql = 'DELETE FROM movies WHERE id=($1) RETURNING *'
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to delete movie: ${err}`)
    }
  }
}
