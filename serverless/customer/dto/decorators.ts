import { registerDecorator, ValidationOptions } from 'class-validator'
import { isCPF, isCEP } from 'serverless/utils/validators'

export function IsCPF(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCPF',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return isCPF(value)
        }
      }
    })
  }
}

export function IsCEP(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCEP',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return isCEP(value)
        }
      }
    })
  }
}
