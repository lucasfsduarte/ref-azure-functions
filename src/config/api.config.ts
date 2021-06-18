/**
 * A configuration file defines environment-aware variables in a logical namespace to easily be imported and used around your application.
 * It has all environment variables loaded from .env file in project root available in process.env.{KEY}.
 *
 * This API configuration module, for instance, provides settings to which port shall the API run.
 */

import { registerAs } from '@nestjs/config'

//  It's recommended to explicitly type your configuration output as it can be infered when injected.
export interface ApiConfig {
  port: number
}

export default registerAs(
  'api',
  (): ApiConfig => ({
    port: parseInt(process.env.PORT, 10) || 3000,
  }),
)
