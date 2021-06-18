/**
 * The app module is the entrypoint module in application.
 * It imports all the other required modules from the application, whether it's a custom developed module or a third party module from a plugin.
 */
import { Module } from '@nestjs/common'

/**
 * These modules declares bootstrap or top-level modules for your application such as GraphQL settings, database connections, etc.
 */
import ConfigurationModule from './modules/configuration.module'
import GraphQLModule from './modules/graphql.module'
import DatabaseModule from './modules/database.module'

// This example module is a all-around empty module
import { ExampleModule } from './example/example.module'

/**
 * This Common module provides common GraphQL scalars for your GQL API.
 *
 * Make sure to have the modules/graphql.module.ts imported as well in the `bootstrapModules` before importing it.
 */
import { CommonModule } from './common/common.module'

/**
 * This User module provides a TypeORM resource example with a CRUD operation.
 *
 * Make sure to have the modules/database.module.ts imported as well in the `bootstrapModules` before importing it.
 */
import { UsersModule } from './users/users.module'

const bootstrapModules = [
  ConfigurationModule,
  // GraphQLModule,
  // DatabaseModule,
]

@Module({
  imports: [
    ...bootstrapModules,
    ExampleModule,
    // CommonModule,
    // UsersModule,
  ],
})
export class AppModule {}
