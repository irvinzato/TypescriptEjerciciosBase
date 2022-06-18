interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero ) {

                    //Si exixten los "hijos?" si no da 0
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
}

imprimeHijos( pasajero1 );