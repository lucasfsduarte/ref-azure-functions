"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const graphql_1 = require("@nestjs/graphql");
const graphql_scalars_1 = require("graphql-scalars");
const GraphQLModule = graphql_1.GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    definitions: {
        path: path_1.join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'interface',
    },
    resolvers: {
        ['Date']: graphql_scalars_1.DateResolver,
        ['DateTime']: graphql_scalars_1.DateTimeResolver,
        ['EmailAddress']: graphql_scalars_1.EmailAddressResolver,
        ['JSON']: graphql_scalars_1.JSONResolver,
        ['ObjectID']: graphql_scalars_1.ObjectIDResolver,
        ['URL']: graphql_scalars_1.URLResolver,
    },
});
exports.default = GraphQLModule;
//# sourceMappingURL=graphql.module.js.map