const ml = require("./multiplicar/multiplicar")

let base = "1"

ml.crearArchivo(base).then(data => {
    console.log(data)
}).catch(e => {
    console.log(e)
}
)

