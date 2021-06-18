// You should implement this class with the interface generated from GraphQL Schema...
// import { CreateUserInput as CreateUserInputInterface } from '../../graphql'

import { IsDate, IsEmail, IsNotEmpty, Length } from 'class-validator'

export class CreateUserInput /* implements CreateUserInputInterface */ {
  @IsNotEmpty()
  @Length(1, 50)
  firstName: string

  @IsNotEmpty()
  @Length(1, 50)
  lastName: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsDate()
  birthDate?: Date
}
