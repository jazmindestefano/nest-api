# API de Usuarios con NestJS

Este proyecto es una API sencilla desarrollada con NestJS para fines educativos. Incluye un CRUD bu00e1sico de usuarios, ideal para aprender los conceptos fundamentales de NestJS.

## Caracteru00edsticas

- CRUD completo de usuarios (Crear, Leer, Actualizar, Eliminar)
- Validaciu00f3n de datos con class-validator
- Documentaciu00f3n con Swagger
- Base de datos SQLite para facilitar el desarrollo
- Docker para ejecutar la aplicaciu00f3n sin instalaciones locales

## Ejecuciu00f3n con Docker

1. Construir y ejecutar el contenedor Docker:

```bash
docker-compose up -d
```

2. La aplicaciu00f3n estaru00e1 disponible en: http://locadocker psdocker pslhost:3000
3. La documentaciu00f3n de Swagger estaru00e1 disponible en: http://localhost:3000/api

## Estructura del proyecto

```
src/
u251cu2500u2500 users/                 # Mu00f3dulo de usuarios
u2502   u251cu2500u2500 dto/               # Objetos de transferencia de datos
u2502   u251cu2500u2500 entities/          # Entidades de base de datos
u2502   u251cu2500u2500 users.controller.ts # Controlador de usuarios
u2502   u251cu2500u2500 users.module.ts    # Mu00f3dulo de usuarios
u2502   u2514u2500u2500 users.service.ts   # Servicio de usuarios
u251cu2500u2500 app.module.ts          # Mu00f3dulo principal de la aplicaciu00f3n
u2514u2500u2500 main.ts                # Punto de entrada de la aplicaciu00f3n
```

## Endpoints de la API

### Usuarios

- `POST /users` - Crear un nuevo usuario
- `GET /users` - Obtener todos los usuarios
- `GET /users/:id` - Obtener un usuario por ID
- `PATCH /users/:id` - Actualizar un usuario
- `DELETE /users/:id` - Eliminar un usuario

## Conceptos de NestJS que se pueden aprender

- **Controladores**: Manejan las solicitudes HTTP y devuelven respuestas
- **Servicios**: Contienen la lu00f3gica de negocio
- **Mu00f3dulos**: Organizan la aplicaciu00f3n en bloques funcionales
- **DTOs (Data Transfer Objects)**: Definen cu00f3mo se transmiten los datos
- **Entidades**: Representan tablas en la base de datos
- **Decoradores**: Proporcionan metadatos para clases y mu00e9todos
- **Pipes**: Validan y transforman los datos de entrada
- **TypeORM**: ORM para interactuar con la base de datos
- **Swagger**: Documentaciu00f3n automau00e1tica de la API

## Ejemplo de uso con cURL

### Crear un usuario

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Juan Perez","email":"juan@ejemplo.com","age":30,"city":"Buenos Aires"}'
```

### Obtener todos los usuarios

```bash
curl -X GET http://localhost:3000/users
```

### Obtener un usuario por ID

```bash
curl -X GET http://localhost:3000/users/1
```

### Actualizar un usuario

```bash
curl -X PATCH http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"age":31,"city":"Cordoba"}'
```

### Eliminar un usuario

```bash
curl -X DELETE http://localhost:3000/users/1
```

## Pru00f3ximos pasos para ampliar el proyecto

- Implementar autenticaciu00f3n y autorizaciu00f3n
- Au00f1adir mu00e1s entidades y relaciones
- Implementar pruebas unitarias y de integraciu00f3n
- Mejorar la seguridad
- Au00f1adir mu00e1s funcionalidades segu00fan sea necesario