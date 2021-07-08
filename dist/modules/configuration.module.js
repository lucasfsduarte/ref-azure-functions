"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const function_config_1 = require("../config/function.config");
const ConfigurationModule = config_1.ConfigModule.forRoot({
    load: [function_config_1.default],
    isGlobal: true,
});
exports.default = ConfigurationModule;
//# sourceMappingURL=configuration.module.js.map