import { Injectable, Logger } from '@nestjs/common'

import { CreateCustomerInput } from '../dto/create-customer.input'
import { CepService } from './cep.service'
import { LoggerService } from './logger.service'

@Injectable()
export class CustomerService {
  constructor(private cep: CepService, private logger: LoggerService) {}

  // Creates a new customer and pushes it to the customers list
  createUser(data: CreateCustomerInput): number {
    // this.userList.push(data)
    // TODO: Output logs with date & hour
    const address = this.cep.fetchData(data.cep)
    this.logger.log(address)
    this.logger.log('Pushing a new client to the list...')
    // return this.userList.length
    return 0
  }
}
