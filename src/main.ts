import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

/**
 * Bootstraps the Nest application, using the application module as the entrypoint.
 * It also starts listening in the port configured
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule) 

  // Configuration of the global validation pipeline
  app.useGlobalPipes(new ValidationPipe())

  console.log('Your application is running! Well done!')
  // Here we perform our data processing and return it to the serverless function handler
  // const response = module.performAction(parameters)
  // return response
}

bootstrap()
