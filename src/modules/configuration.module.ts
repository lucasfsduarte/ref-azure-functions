/**
 * The configuration module provides the required module to access configuration variables across the application.
 *
 * It loads the namespace variables in the config folder.
 */

import { ConfigModule } from '@nestjs/config'

// Importing the config variables settings for each namespace
import apiConfig from '../config/api.config'
import databaseConfig from '../config/database.config'

const ConfigurationModule = ConfigModule.forRoot({
  load: [apiConfig, databaseConfig],
  isGlobal: true,
})

export default ConfigurationModule
