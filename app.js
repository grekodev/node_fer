const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs');
var colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(file => console.log(`Archivo creado `, colors.green(file)))
            .catch(console.log)
        break;
    default:
        console.log('comando no reconocido');
}
// console.log(argv);

// console.log(argv.base);