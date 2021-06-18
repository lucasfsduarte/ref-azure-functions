// import { Resolver } from '@nestjs/graphql'
import { CommonService } from './common.service'

// @Resolver('Common')
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}
}
