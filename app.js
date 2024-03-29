//const argv = require('yargs').argv;


const argv = require('./config/yargs').argv;
var colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        //console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        //console.log(listado);


        for (let tarea of listado) {
            let title = tarea.completado ? "Completados" : "No Completados";
            console.log(`===========${title}=============`.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================');
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log("Comando no es reconocido.");
}