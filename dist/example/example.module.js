"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleModule = void 0;
const common_1 = require("@nestjs/common");
const example_controller_1 = require("./example.controller");
const example_service_1 = require("./example.service");
let ExampleModule = class ExampleModule {
};
ExampleModule = __decorate([
    common_1.Module({
        providers: [example_service_1.ExampleService],
        controllers: [example_controller_1.ExampleController],
    })
], ExampleModule);
exports.ExampleModule = ExampleModule;
//# sourceMappingURL=example.module.js.map