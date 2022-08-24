import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

let pool

if (process.env.NODE_ENV === 'dev') {
  pool = new Pool({
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT as string),
  })
}
if (process.env.NODE_ENV === 'test') {
  pool = new Pool({
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB_TEST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT as string),
  })
}

export default pool
