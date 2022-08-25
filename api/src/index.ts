import express, { Application } from 'express'
import dotenv from 'dotenv'
import routes from './routes'
dotenv.config()
const app:Application = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use("/",routes)


app.get('/', (req, res) => {
  res.send('Welcome to home page')
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

export default app
