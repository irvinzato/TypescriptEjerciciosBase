function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number,b: number): number => {
    return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base;
}

interface PersonajeSmite {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeSmite, curarX: number ): void {
    personaje.pv += curarX;

}

const nuevoPersonaje: PersonajeSmite = {
    nombre: 'Chaac',
    pv: 1500,
    mostrarHp() {
        console.log('Puntos de vida: ', this.pv);
    }
}

curar( nuevoPersonaje, 20 );
nuevoPersonaje.mostrarHp();



const resultado = multiplicar(5, 4);

console.log(resultado);