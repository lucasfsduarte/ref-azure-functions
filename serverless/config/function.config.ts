/**
 * A configuration file defines environment-aware variables in a logical namespace to easily be imported and used around your application.
 * It has all environment variables loaded from .env file in project root available in process.env.{KEY}.
 *
 */

import { registerAs } from '@nestjs/config'

//  It's recommended to explicitly type your configuration output as it can be infered when injected.
export interface FunctionConfig {
  parameter: number
}

export default registerAs(
  'function',
  (): FunctionConfig => ({
    parameter: parseInt(process.env.PARAMETER, 10) || 2
  })
)
