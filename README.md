
## Instalación del Servidor y levantamiento local

Antes de proceder con la instalación debes tener instalado PHP y Composer en tu ordenador.

Clona el repositorio.

```bash
  git clone https://github.com/JCMartinezGarcia/CTC.git
```
Instala las dependencias.
```bash
  cd CTC
  cd laravel
  composer install
```
Crea un archivo de configuración .env en la raiz del proyecto laravel. Ahora copia y pega el contenido del archivo .env.example dentro el archivo .env que acabas de crear.
#### Variables de Entorno

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno al archivo.env

Solamente deja la variable de entorno que se indica para la conexion a la base de datos.

`APP_URL=http://localhost:8000`

`FRONTEND_URL=http://localhost:5173`

`DB_CONNECTION=sqlite`

Generar APP_KEY. Esta clave se almacena en el archivo .env.

```bash
 php artisan key:generate
```

Crea un archivo llamado database.sqlite en la carpeta database/ del servidor.

Ejecuta las migraciones y ejecuta los seeders.

```bash
php artisan migrate:fresh --seed
```

Inicia el servidor local


```bash
 php artisan serve
```

## Instalación del Cliente y levantamiento local

Antes de proceder con la instalación debes tener instalado Node.js en tu ordenador.

Instala las dependencias.
```bash
  cd CTC
  cd react
  npm install
```

Inicia el cliente en el entorno local


```bash
npm run dev
```

Visita en el navegador la url de tu servidor local para le cliente: http://localhost:5173/

