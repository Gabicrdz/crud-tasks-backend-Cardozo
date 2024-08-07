const express = require('express');

const app = express();

app.use(express.json());
app.use(require('./routes/tasks.routes'))

const PORT = 3440;

app.listen(PORT,()=>{
    console.log(`el servidor esta funcionando en el ${PORT}`)
})