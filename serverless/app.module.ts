/**
 * The app module is the entrypoint module in application.
 * It imports all the other required modules from the application, whether it's a custom developed module or a third party module from a plugin.
 */
import { Module } from '@nestjs/common'

/**
 * These modules declares bootstrap or top-level modules for your application such as GraphQL settings, database connections, etc.
 */
import ConfigurationModule from './modules/configuration.module'

const bootstrapModules = [
  ConfigurationModule
]

// This module performs all customer operations
import { CustomerModule } from './customer/customer.module'

@Module({
  imports: [
    ...bootstrapModules,
    CustomerModule
  ]
})
export class AppModule {}
