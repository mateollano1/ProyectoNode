const fs = require('fs');

let data = ""
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("No es un número")
            return;
        }
        for (let index = 0; index <= 10; index++) {
            let value = base * index
            data = data + `${base} * ${index} = ${value}` + "\n"
            console.log(`${base} * ${index} = ${value}`)
        }
        fs.writeFile(`./tablas/table-${base}.txt`, data, (err) => {
            if (err) {
                reject("error")
            } else {
                resolve(`table-${base}.txt`)
            }
        });
    })
}

module.exports ={
    crearArchivo
}