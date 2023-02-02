import express, { Application, Request, Response, NextFunction } from 'express'

//typescript = mendefine
const app: Application = express()
const port: Number = 3000

//routing
app.use('/test', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: '200', data: 'hello, fahmi' })
})

app.listen(port, () => console.log(`server is listening on port ${port}`))
