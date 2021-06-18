import { registerAs } from '@nestjs/config'

/**
 * It's recommended to explicitly type your configuration output as it can be infered when injected.
 *
 * Example when setting up a Postgres variables with TypeORM:
 * import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
 * type DatabaseConfig = PostgresConnectionOptions
 */

type DatabaseConfig = any

export default registerAs(
  'database',
  (): DatabaseConfig => ({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'psql',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || '',
  }),
)
