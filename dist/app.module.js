"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/entities/user.entity");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.DATABASE_TYPE || 'postgres',
                host: process.env.DATABASE_HOST || 'localhost',
                port: parseInt(process.env.DATABASE_PORT || '5432'),
                username: process.env.DATABASE_USERNAME || 'postgres',
                password: process.env.DATABASE_PASSWORD || 'postgres',
                database: process.env.DATABASE_NAME || 'nest_api',
                entities: [user_entity_1.User],
                synchronize: true,
            }),
            users_module_1.UsersModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map