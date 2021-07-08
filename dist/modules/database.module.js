"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_config_1 = require("../config/database.config");
let TypeOrmConfigService = class TypeOrmConfigService {
    constructor(databaseConfig) {
        this.databaseConfig = databaseConfig;
    }
    createTypeOrmOptions() {
        return {
            type: this.databaseConfig.type,
            host: this.databaseConfig.host,
            port: this.databaseConfig.port,
            username: this.databaseConfig.username,
            password: this.databaseConfig.password,
            database: this.databaseConfig.database || '',
            synchronize: process.env.NODE_ENV !== 'production',
            entities: [path_1.join(__dirname, '../**/*.entity{.ts,.js}')],
        };
    }
};
TypeOrmConfigService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(database_config_1.default.KEY)),
    __metadata("design:paramtypes", [Object])
], TypeOrmConfigService);
const DatabaseModule = typeorm_1.TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService,
});
exports.default = DatabaseModule;
//# sourceMappingURL=database.module.js.map