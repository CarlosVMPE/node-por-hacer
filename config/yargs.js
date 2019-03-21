/*const argv...
comando crear 'crear elemento por hacer'
    --descripcion - d
cmd actualizar 'actualiza el estado completado de una tarea'
    --descripcion - d
    --completado - c = true*/

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .command('listar', 'Lista las tareas', {
        completado
    })
    .help()
    .argv;



module.exports = {
    argv
}