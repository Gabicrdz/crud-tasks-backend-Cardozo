const e = require('express');
const {conectDB} = require('../db/database.js');
const crtl ={};

crtl.obtenerTasks = async ( req,res)=>{
    try{
        const conexion = await conectDB();

    const [resultado] = await conexion.query('SELECT * FROM tasks_db');
    if(resultado.length === 0){
        return res.status(404).json({msg:'La tarea no se encuentra en la base de datos'})
    }else{
        return res.json(resultado);
    }

    }catch(error){
        return res.status(500).json({msg:'error interno del servidor'})
    }
    
}

crtl.obtenerID = async ( req,res)=>{
    const conexion = await conectDB();
    try{
        const {id}= req.params;

        const [resultado]= await conexion.query('SELECT * FROM tasks_db  WHERE id = ?',[id]);
        if(resultado.length === 0){
            return res.status(404).json({msg:'La tarea no se encuentra registrada en la base de datos'})
        }else{
            
        return res.status(200).json(resultado);
        }
    
    }catch(error){
        return res.status(500).json({msg:'error interno del servidor',error})
    }
    
}

crtl.crearTasks = async ( req,res)=>{
    try{
        const { title,description,isComplete}= req.body;
        const conexion = await conectDB();
        const [resultado] = await conexion.query('INSERT INTO  tasks_db ( title, description, isComplete) VALUES (?,?,?)',[
            title,description,isComplete
        ])
        if(title ===" " ||description ===" "||isComplete ===" " ){
            return res.json({msg:'todos los campos son requeridos'})
        } 
        res.status(201).json({
            id: resultado.insertId,
            title,
            description,
            isComplete
        })    
    }catch(error){
        return res.status(500).json({msg:'error interno del servidor',error})
    }
}

crtl.editarTasks = async(req,res)=>{
    const conexion = await conectDB();
    const {id} = req.params
    const { title,description,isComplete}= req.body;
    try{
    const [tasksEncontrada]= await conexion.query('SELECT * FROM tasks_db  WHERE id = ?',[id]);
    if (tasksEncontrada.length === 0) {
        console.log('tarea no encontrada')
    }else{
        const [resultado] = await conexion.query('UPDATE tasks_db SET title = ?, description = ?, isComplete = ? WHERE id = ?', [title, description, isComplete, id]);
        if(!resultado.ok){
        return res.status(200).json({msg:'la tarea fue editada correctamente'})
        }else{
            return res.status(404).json({msg:'ocurrio un error al editar la tarea '})
        }
    }
    }catch(error){
        return res.status(500).json({msg:'error interno del servidor',error})
    }
    
}
crtl.eliminarTasks = async(req,res)=>{
    const conexion = await conectDB();
    const id = req.params.id;
    try{
        const [resultado]= await conexion.query('DELETE FROM `tasks_db` WHERE id = ?',[id]);
            if(!resultado.ok){
                return res.status(200).json({msg:'tarea eliminada correctamente'});
            }   
        
    }catch(error){
        return dres.status(500).json({msg:'error interno del servidor'})
    }
}
module.exports= crtl;