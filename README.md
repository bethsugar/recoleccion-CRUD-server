# CRUD REST API con Node.js MYSQL y Typescript


## Software Requerido
- NodeJS
- MYSQL

## CONFIGURACIONES

### CONFIGURAR EL PROYECTO
- Para instalar las dependencias correr el comando `npm i`

### CONFIGURAR EL SERVIDOR
- Crear base de datos en la consola de MYSQL apartir de los comandos de database/recolecta.sql

- Ir a src/keys.ts y modificar de acuerdo a sus credenciales
```
database: {
        host: 'localhost',
        user: 'TU USUARIO',
        password: 'TU CONTRASEÑA',
        database: 'recolecta',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }

 ```

## INICIALIZACIONES

### BUILD
- Para que el proyecto compile en javascript correr el comando `tsc`



### CORRER EL PROYECTO
- Corre en el localhost 4000
- Para correr el proyecto usar el comando `npm run dev`
