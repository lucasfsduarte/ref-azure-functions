import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { CustomerModule } from './customer/customer.module'
import { CustomerService } from './customer/services/customer.service'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  // Starting the NestJS instance
  const app = await NestFactory.create(AppModule)

  // Configuration of the global validation pipeline
  app.useGlobalPipes(new ValidationPipe())

  // Getting user management service instance
  const service = app.select(CustomerModule).get(CustomerService)

  // Processing data
  const customer = JSON.parse((req.query.customer || (req.body && req.body.customer)))
  const response = 'Response: ' + service.createUser(customer)

  context.res = {
      // status: 200, /* Defaults to 200 */
      body: response
  }
}

export default httpTrigger
