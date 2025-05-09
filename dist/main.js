"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API de Usuarios')
        .setDescription('API sencilla para aprender NestJS con un CRUD básico de usuarios')
        .setVersion('1.0')
        .addTag('usuarios')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    console.log(`La aplicación está corriendo en: http://localhost:3000`);
    console.log(`La documentación Swagger está disponible en: http://localhost:3000/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map