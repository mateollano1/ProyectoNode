const fs = require("fs")
const { leerTareas } = require("./leerTareas")

let tareasToDo = []
let tareaToDo = {
    nombre: "",
    completado: false
}
let crearTarea = (tarea) => {
    return new Promise((resolve, reject) => {
        tareaToDo.nombre = tarea
        leerTareas().then(data => {
            console.log(data)
            tareasToDo = data
            tareasToDo.push(tareaToDo)
            console.log(tareasToDo);
            let datas = JSON.stringify(tareasToDo);
            fs.writeFileSync('./DB/tareasDB.json', datas, (err) => {
                if (err) {
                    reject("error to write")
                };
                resolve("Tarea creada")
            });
        });
    })


}

module.exports = {
    crearTarea
}
