import { Router, type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'

export const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('succes get data health')
  res.status(200).send({ status: '200', data: 'hello, fahmi' })
})
