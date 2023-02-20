import { Router, type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('succes get data product')
  res.status(200).send({ status: true, data: [{ name: 'adidas', price: 3000000, sale: 'right now' }], statusCode: 200 })
})
ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('succes add new data product')
  res.status(200).send({ status: true, data: req.body, statusCode: 200 })
})
