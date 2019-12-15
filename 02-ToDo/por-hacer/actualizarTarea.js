const { leerTareas } = require("./leerTareas")
const fs = require("fs")

let actualizarTarea = (task) => {
    new Promise((resolve, reject) => {
        leerTareas().then(data => {
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (element['nombre'] == task) {
                    data[index]['completado'] = true
                }
            }
            let datas = JSON.stringify(data);
            fs.writeFileSync('./DB/tareasDB.json', datas, (err) => {
                if (err) {
                    reject("error to write")
                };
                resolve("Tarea Actualizada")
            });
        })
    })
}

module.exports  = {
    actualizarTarea
}