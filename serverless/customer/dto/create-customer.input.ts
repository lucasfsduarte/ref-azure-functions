// import { CreateUserInput as CreateUserInputInterface } from '../../graphql'

import { IsDate, IsEmail, IsNotEmpty, Length } from 'class-validator'
import { IsCPF, IsCEP } from './decorators'

export class CreateCustomerInput {
  @IsNotEmpty()
  @Length(1, 50)
  firstName: string

  @IsNotEmpty()
  @Length(1, 50)
  lastName: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsCPF()
  cpf: string

  @IsDate()
  birthDate?: Date

  @IsNotEmpty()
  @IsCEP()
  cep: string
}
