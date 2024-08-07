const {crearTasks,obtenerTasks,obtenerID,editarTasks,eliminarTasks}= require('../controllers/tasks.controllers');
const routes = require('express').Router();

routes.get('/tasks',obtenerTasks);
routes.get('/tasks/:id',obtenerID)
routes.post('/tasks',crearTasks);
routes.put('/tasks/:id',editarTasks);
routes.delete('/tasks/:id',eliminarTasks)

module.exports=routes;