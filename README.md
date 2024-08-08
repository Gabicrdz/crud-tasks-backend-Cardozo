# Crud-Tasks-Backend

Crud-Tasks-Backend es un proyecto que tiene como propósito la creación, edición, eliminación y visualización de una serie de tareas, las cuales podrán ser creadas y guardadas en una base de datos MySQL.

## Instalación

Para instalar y configurar el proyecto, sigue estos pasos:
1. Clona el repositorio: `git clone https://github.com/Gabicrdz/crud-tasks-backend-Cardozo.git`
2. Instala las dependencias: `npm install`
3. Configura la conexión a la base de datos MySQL en el archivo de configuración.
4. Crea la tabla de tareas en tu base de datos MySQL.
5. Inicia el servidor: `npm start`

## Uso

### Obtener la lista de tareas

- **Ruta:** `GET /tasks`
- **Controlador:** `crtl.obtenerTasks`
- **Descripción:** Obtiene la lista de todas las tareas registradas en la base de datos.

### Obtener una tarea por ID

- **Ruta:** `GET /tasks/:id`
- **Controlador:** `crtl.obtenerID`
- **Parámetros:** `id` (ID de la tarea)
- **Descripción:** Obtiene una tarea específica por su ID.

### Crear una tarea

- **Ruta:** `POST /tasks`
- **Controlador:** `crtl.crearTasks`
- **Cuerpo de la solicitud:** `{ "title": "Tarea 1", "description": "Descripción de la tarea", "isComplete": false }`
- **Descripción:** Crea una nueva tarea en la base de datos.

### Actualizar una tarea

- **Ruta:** `PUT /tasks/:id`
- **Controlador:** `crtl.editarTasks`
- **Parámetros:** `id` (ID de la tarea)
- **Cuerpo de la solicitud:** `{ "title": "Tarea 1 actualizada", "description": "Descripción actualizada", "isComplete": true }`
- **Descripción:** Actualiza los datos de una tarea existente.

### Eliminar una tarea

- **Ruta:** `DELETE /tasks/:id`
- **Controlador:** `crtl.eliminarTasks`
- **Parámetros:** `id` (ID de la tarea)
- **Descripción:** Elimina una tarea de la base de datos.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MySQL2

## Endpoints
 Tareas
1. GET /tasks: Obtiene todas las tareas.
2. GET /tasks/:id: Obtiene una tarea por su ID.
3. POST /tasks: Crea una nueva tarea.
4. PUT /tasks/:id: Actualiza una tarea por su ID.
5. DELETE /tasks/:id: Elimina una tarea por su ID.
