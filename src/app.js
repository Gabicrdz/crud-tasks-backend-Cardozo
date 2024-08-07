const express = require('express');

const app = express();

app.use(express.json());
app.use(require('./routes/tasks.routes.js'))

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`el servidor esta funcionando en el ${PORT}`)
})