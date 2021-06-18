// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/**
 * The GraphQL module provides the required module to setup a GraphQL server in a schema-first approach across the application.
 * It also setups the generated code-gen typescripts declarations inferred from your GraphQL schema.
 *
 * Make sure to install the GQL packages before using this module:
 * > yarn add graphql @nestjs/graphql graphql-tools graphql-scalars apollo-server-express
 *
 * And remove the @ts-nocheck line on top of the file
 */
import { join } from 'path'
import { GraphQLModule as GQLModule } from '@nestjs/graphql'

// Useful scalars from graphql-scalars plugin
import {
  DateResolver,
  DateTimeResolver,
  JSONResolver,
  EmailAddressResolver,
  ObjectIDResolver,
  URLResolver,
} from 'graphql-scalars'

const GraphQLModule = GQLModule.forRoot({
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'interface',
  },
  resolvers: {
    ['Date']: DateResolver,
    ['DateTime']: DateTimeResolver,
    ['EmailAddress']: EmailAddressResolver,
    ['JSON']: JSONResolver,
    ['ObjectID']: ObjectIDResolver,
    ['URL']: URLResolver,
  },
})

export default GraphQLModule
