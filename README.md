# ToDo List App

Una aplicación de **ToDo List** desarrollada en **React** con **Vite**, utilizando **TypeScript**, **React Query**, **TailwindCSS**, **ShadCN UI** y **Axios**. Esta aplicación permite gestionar tus tareas de manera eficiente con una interfaz moderna y fácil de usar.

## Funcionalidades
- **Crear y eliminar tareas:** Añade nuevas tareas o elimina las que ya no necesites.
- **Marcar tareas como completadas:** Marca las tareas como hechas cuando las termines.
- **Establecer un deadline:** Asigna una fecha y hora límite a cada tarea.
- **Listar todas las tareas:** Visualiza todas las tareas creadas en un solo lugar.
- **Ordenar por fecha:** Las tareas se pueden ordenar automáticamente por su fecha límite.
- **Resumen de tareas:** Muestra un resumen con la cantidad de tareas completadas y pendientes.

## Tecnologías utilizadas

- **TypeScript**: Superset de JavaScript que añade tipado estático, mejorando la robustez del código.
- **React**: Librería de JavaScript para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera para aplicaciones web.
- **React Query**: Para gestionar el estado del servidor y simplificar el fetching de datos.
- **Axios**: Cliente HTTP para realizar peticiones a APIs.
- **TailwindCSS**: Framework CSS para diseñar de forma rápida y eficiente.
- **ShadCN UI**: Componentes preconstruidos y personalizables para React, con un enfoque en la accesibilidad y estética.

## Instrucciones para ejecutar la aplicación

### 1. Clonar el repositorio
```bash
git clone https://github.com/marcosprosperi/brain-todo-front
cd todo-list-app
```

### 2. Configuración del entorno de desarrollo

Si deseas ejecutar la aplicación localmente sin Docker:

#### 2.1 Instalar dependencias
Asegúrate de tener **Node.js** instalado en tu sistema. Luego, ejecuta:

```bash
npm install
```

#### 2.2 Ejecutar la aplicación en modo de desarrollo
Para iniciar el servidor de desarrollo de Vite, usa:

```bash
npm run dev
```

### 3. Ejecutar la aplicación con Docker

Si prefieres usar **Docker**, la aplicación tiene un `Dockerfile` para simplificar el proceso. Sigue estos pasos:

#### 3.1 Construir la imagen de Docker
Desde el directorio raíz del proyecto, ejecuta el siguiente comando para construir la imagen de Docker:

```bash
docker build . -t "todo-list-app" .
```

#### 3.2 Ejecutar el contenedor de Docker
Una vez que la imagen esté construida, puedes ejecutar la aplicación en un contenedor con el siguiente comando:

```bash
docker run -p 3000:3000 todo-list-app
```

Esto ejecutará la aplicación en el puerto **3000**. Puedes acceder a la aplicación desde tu navegador en `http://localhost:3000`.

### 4. Configuración adicional
Si necesitas ajustar el puerto o cualquier otra configuración, puedes modificar el archivo `Dockerfile` o los scripts de inicio en el proyecto según tus necesidades.

## Dockerfile

El `Dockerfile` incluido en el proyecto se encarga de construir y ejecutar la aplicación dentro de un contenedor Docker. Aquí un resumen de lo que hace:

1. Utiliza una imagen base de **Node.js**.
2. Copia el código de la aplicación en el contenedor.
3. Instala las dependencias usando `npm install`.
4. Construye la aplicación para producción con `npm run build`.
5. Expone el puerto **3000** para servir la aplicación.