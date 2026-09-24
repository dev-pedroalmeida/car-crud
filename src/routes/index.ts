import cars from './cars.ts'
import { type Express } from 'express'

const mountRoutes = (app: Express) => {
  app.use('/cars', cars)
}

export default mountRoutes