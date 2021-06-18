// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/**
 * The Database module provides the required module to setup a DB Connection and a TypeORM setting attached to it across the application.
 *
 * Make sure to install the TypeORM packages before using this module:
 * > yarn add @nestjs/typeorm typeorm
 *
 * Also don't forget to install your specific database: (example for Postgres, but could be any TypeORM available connector)
 * > yarn add pg
 *
 * And remove the @ts-nocheck line on top of the file
 */
import { join } from 'path'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import {
  TypeOrmModule,
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm'

import databaseConfig from '../config/database.config'

type DatabaseConfigType = ConfigType<typeof databaseConfig>

@Injectable()
class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(databaseConfig.KEY)
    private databaseConfig: DatabaseConfigType,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.databaseConfig.type,
      host: this.databaseConfig.host,
      port: this.databaseConfig.port,
      username: this.databaseConfig.username,
      password: this.databaseConfig.password,
      database: this.databaseConfig.database || '',
      synchronize: process.env.NODE_ENV !== 'production',
      entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
    }
  }
}

const DatabaseModule = TypeOrmModule.forRootAsync({
  useClass: TypeOrmConfigService,
})

export default DatabaseModule
