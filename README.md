

## KidsTube\_Pro\_Backend

### Descripción

KidsTube\_Pro\_Backend es el motor detrás de la plataforma KidsTube. Este servicio se encarga de manejar toda la lógica del servidor, conexión con la base de datos, autenticación de usuarios, gestión de perfiles, control de contenido y supervisión de accesos. Es el guardián invisible que asegura que todo funcione correctamente y de manera segura.

La plataforma permite:

* **Autenticación y autorización**: Inicio de sesión seguro con Google y validación mediante tokens JWT.
* **Gestión de usuarios y perfiles**: Administración de cuentas de padres, tutores y niños.
* **Control de contenido**: Revisión, aprobación y gestión del material audiovisual.
* **Supervisión de actividad**: Registro y monitoreo del tiempo de reproducción y vistas.
* **Notificaciones**: Envío de correos de verificación y alertas SMS.

---

### Diagrama

![image](https://github.com/user-attachments/assets/cc9c7f45-157a-4f93-88e5-c4c170e1c85f)


### Tecnologías utilizadas

* **Node.js**: El motor que hace que todo funcione.
* **Express.js**: Las autopistas que dirigen cada solicitud al lugar correcto.
* **MongoDB + Mongoose**: Nuestra biblioteca donde se guardan todos los datos.
* **JWT (JSON Web Token)**: El portero que verifica si puedes entrar o no.
* **Google OAuth 2.0**: Para iniciar sesión con cuentas de Google.
* **YouTube Data API**: Nos permite validar videos y obtener información segura.
* **Twilio**: Envía SMS para alertas o códigos de seguridad.
* **Nodemailer**: Se encarga de enviar correos electrónicos de verificación o notificación.
* **dotenv**: Protege las llaves secretas y variables de entorno.

### Instalación

1. Clona el repositorio en tu máquina local:

   
```
git clone https://github.com/Ali150105/KidsTube-Pro-Backend.git

```
2. Entra al directorio del backend:

```
   cd KidsTube-Pro-Backend

```
3. Instala las dependencias:

```   
   npm install
  
``` 
5. Crea y configura el archivo `.env`:

```
   MONGODB_URI=tu_cadena_de_conexion
   JWT_SECRET=tu_clave_super_secreta
   GOOGLE_CLIENT_ID=tu_google_client_id
   GOOGLE_CLIENT_SECRET=tu_google_client_secret
   YOUTUBE_API_KEY=tu_clave_de_youtube
   TWILIO_ACCOUNT_SID=tu_sid_de_twilio
   TWILIO_AUTH_TOKEN=tu_token_de_twilio
   EMAIL_USER=tu_correo
   EMAIL_PASS=tu_contraseña_del_correo

```
6. Inicia el servidor:

```
   node app.js

```

