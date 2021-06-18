// You should implement this class with the interface generated from GraphQL Schema...
// import { UpdateUserInput as UpdateUserInputInterface } from '../../graphql'

import { IsDate, IsEmail, IsInt, IsNotEmpty, Length } from 'class-validator'

export class UpdateUserInput /* implements UpdateUserInputInterface */ {
  @IsInt()
  @IsNotEmpty()
  id: number

  @Length(1, 50)
  firstName?: string

  @Length(1, 50)
  lastName?: string

  @IsEmail()
  email?: string

  @IsDate()
  birthDate?: Date
}
