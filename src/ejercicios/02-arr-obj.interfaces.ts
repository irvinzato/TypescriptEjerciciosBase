let habilidades: string[] = [ 'Bash', 'Counter', 'Healing' ];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    pueboNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.pueboNatal = 'Umbrella'

console.table( personaje );