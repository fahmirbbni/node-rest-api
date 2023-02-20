import bodyParser from 'body-parser'
import express, { type Application } from 'express'
import { routes } from './routes'
import { logger } from './utils/logger'
import cors from 'cors'

const app: Application = express()
const port: number = 3000

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors access handle
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})
routes(app)

app.listen(port, () => {
  logger.info(`server is listening on port ${port}`)
})
