const fs = require("fs")

let leerTareas = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./DB/tareasDB.json', (err, data) => {
            if (err) {
                reject("error to read")
            } else {
                let tareasToDo = JSON.parse(data)
                resolve(tareasToDo)
            }
        })

    })

}

module.exports = {
    leerTareas
}