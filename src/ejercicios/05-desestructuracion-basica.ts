interface Detalles {
    autor: string;
    anio: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
//Si quisiera ponerle otro nombre a cualquier variable desestructurada seria "volumen: vol"
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log("El volumen actual es: ", volumen);
console.log("El segundo actual es: ", segundo);
console.log("La cancion actual es: ", cancion);
console.log("El autor es: ", autor);


//En la DESESTRUCTURACION de arreglos el nombre no es lo importante, aqui la posición es lo importante
const dbz: string[] = [ 'Goku', 'Vegeta', 'Trunks' ];
const [ p1, p2 , p3 ] = dbz;
/*Si solo me interesa desestructurar la posicion 3
const [ , , p3 ] = dbz;
*/
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);