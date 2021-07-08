import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'

import { CustomerService } from './services/customer.service'
import { CepService } from './services/cep.service'
import { LoggerService } from './services/logger.service'

import moment from 'moment'

@Module({
  imports: [HttpModule],
  providers: [CustomerService, CepService, LoggerService]
})
export class CustomerModule {}
