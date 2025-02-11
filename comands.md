
## Comandos de Nest JS

### Creacion de nuevo proyecto
```bash
nest new <nombre-del-proyecto>
```

### Ejecutar en un entorno de desarrollo
```bash
npm run start:dev
# o
nest start --watch
```

### Crear un recurso nuevo
Este comando crea un servicio, un modulo y un controlador nuevo

```bash
nest g res --no-spec
```

## Comandos de Prisma

### Crear migracion
```bash
npx prisma migrate dev
```