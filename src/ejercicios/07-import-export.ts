//Se pueden exportar interfaces y funciones, la diferencia es que las funciones ejecutan el codigo que hagan en el archivo donde se exporta
import { Producto, calculaISV } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    },
];

const [total, isv] = calculaISV( carritoCompras );

console.log('Total: ', total);
console.log('ISV: ', isv);