//EN ESTE ARCHIVO Y EN CLASES PUEDE HABER UN ERROR EN TERMINAL POR VERSIONAMIENTO DEL TS, SIN EMBARGO FUNCIONA
//npm run start
//Para usarlos se configura en "tsconfig.json" "experimentalDecorators= true"
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
}

//El decorador trabaja a un nivel antes de la instancia, sirven para expandir o añadir funcionalidades
//En Angular son muy usados para poder diferenciar que es la clase(Componente, directiva, servicio, pipe, etc)
@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Vamos a darle');
    }
}

console.log( MiSuperClase );

const miClase = new MiSuperClase();

console.log( miClase.miPropiedad );