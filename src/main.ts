import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

/**
 * Bootstraps the Nest application, using the application module as the entrypoint.
 * It also starts listening in the port configured
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Fetches the port configuration variable in the `api` namespace
  const configService = app.get<ConfigService>(ConfigService)
  const port = configService.get('api.port')

  // Configuration of the global validation pipeline
  app.useGlobalPipes(new ValidationPipe())

  console.log(`Your application will run in port ${port}`)
  await app.listen(port)
}

bootstrap()
