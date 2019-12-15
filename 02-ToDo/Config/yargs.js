const argv = require("yargs")
.command('crear','crear una tarea por hacer',{
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Tareas por hacer'
    }
})
.command('actualizar','Actualiza una tarea creada',{
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Tareas por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completada una tarea pendiente'
    }
})
.help()
.argv;

module.exports = {
    argv
}
