//PUEDE TENER DETALLES EN LA TERMINAL POR EL SUPER
//COMENTE TODO LO QUE USA EL SUPER PARA EVITAR POR MIENTRAS ERROR EN TERMINAL

/* class PersonaNormal {
    constructor( public nombre: string, public direccion: string ) {}

} */

//En una clase puedo definir metodos y es reconocida por JS, las interfaces no se muestran y no dejan definir que hace un metodo
//class Heroe extends PersonaNormal {
class Heroe  {
   /*  alterEgo: string;
    edad: number;
    nombreReal: string; */

    //El constructor se manda a llamar cuando hago la instantación "... = new Heroe()"
    constructor( //Aui mismo puedo inicializar mis variables, sin tener que declararlas arriba primer y hacer "this.alterEgo = alterego"
        public alterego: string, 
        public edad: number, 
        public nombreReal: string
        ) { 
        console.log('Hey');
        //super lo que quiere decir es "llama tambien al contructor de la clase que se extiende "Persona Normal" en este caso
        //super( nombreReal, 'New York, USA' ); //Puede dar un error en terminal por cosas del versionamiento
    }
}

const ironman = new Heroe( 'Ironman', 44, 'Tony Stark' );

console.log(ironman);