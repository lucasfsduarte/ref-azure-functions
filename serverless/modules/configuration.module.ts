/**
 * The configuration module provides the required module to access configuration variables across the application.
 *
 * It loads the namespace variables in the config folder.
 */

import { ConfigModule } from '@nestjs/config'

// Importing the config variables settings for each namespace
import functionConfig from '../config/function.config'

const ConfigurationModule = ConfigModule.forRoot({
  load: [functionConfig],
  isGlobal: true
})

export default ConfigurationModule
