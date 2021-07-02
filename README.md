<h1> API-Sesion </h1>
<img align="right" src="https://cdn.dribbble.com/users/398490/screenshots/1716348/users.gif" width="200">
Api para manejo de sesiones con Json Web Tokens, encriptacion de contraseñas, almacenamiento de usuarios en mongodb  y envio de correos electronicos como metodo de verificacion de cuentas este proyecto se realizo con node.js y las siguientes dependencias:
- Nodemailer 
- Mongoose
- Dotenv
- Bcrypt
- Json-Web-Token.

## ¿Como empiezo?
Para el uso de esta plantilla se debe crear un archivo .env donde se almacenaran las variables de entorno asociadas a la coneccion de la base de datos en mongo, autenticacion para el envio de correos,nombre de su aplicacion etc..:

```js
PORT=numero del puerto por el que se levanta el servicio
STRING_CONNECTION="" coneccion a la base de datos en mongo 
SECRET="" string de palabra secreta para cifrar la informacion con Json-Web-Token
USER="" correo desde el que envia mensaje de confirmacion
PASS="" contraseña del correo
NAME_APP="" nombre de la aplicacion
SERVICE1="" descripcion del servicio 
SERVICE2="" descripcion del servicio 2
SERVICE3="" descripcion del servicio 3
```

## ¿Que puedo hacer?

### Registrar usuario

### Verificar Cuenta

### Iniciar Sesion






