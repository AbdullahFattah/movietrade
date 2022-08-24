import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

app.use("/",routes)


app.get('/', (req, res) => {
  res.send('Welcome to home page')
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

export default app
