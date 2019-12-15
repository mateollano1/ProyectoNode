const argv = require("./Config/yargs").argv
const cr = require("./por-hacer/crearTarea")
const { leerTareas } = require("./por-hacer/leerTareas")
const { actualizarTarea } = require("./por-hacer/actualizarTarea")

let comando = argv["_"][0]
switch (comando) {
    case "crear":
        cr.crearTarea(argv.descripcion).then(
            data => {
                console.log("Tarea guardada correctamente");
            }
        )
        break;
    case "listar":
        leerTareas().then(data => {
            console.log("Tareas Pendientes: \n")
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (!element['completado']) {
                    console.log(`Tarea: ${element[`nombre`]}`)
                }
            }
        })
        break;
    case "actualizar":
        actualizarTarea(argv.descripcion)
        break;

    default:
        console.log("Comando no reconocido");
        break;
}