

function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio 	 = precio;
    this.cantidad  = cantidad;
}

const Producto1 = new Producto(prompt("Nombre del producto"),prompt("Precio del producto"), prompt("Cantidad del producto"));
const Producto2 = new Producto(prompt("Nombre del producto"),prompt("Precio del producto"), prompt("Cantidad del producto"));
const Producto3 = new Producto(prompt("Nombre del producto"),prompt("Precio del producto"), prompt("Cantidad del producto"));
const Producto4 = new Producto(prompt("Nombre del producto"),prompt("Precio del producto"), prompt("Cantidad del producto"));

const productos = [
    { nombre:Producto1.nombre,precio:Producto1.precio, cantidad:Producto1.cantidad },
    { nombre:Producto2.nombre,precio:Producto2.precio, cantidad:Producto2.cantidad },
    { nombre:Producto3.nombre,precio:Producto3.precio, cantidad:Producto3.cantidad },
    { nombre:Producto4.nombre,precio:Producto4.precio, cantidad:Producto4.cantidad }];


/*filtro cual es el mas barato*/
const baratos = productos.filter(producto => producto.precio < 100); 
console.log(baratos);
/*suma del precio total*/
let precio1 = Producto1.precio * Producto1.cantidad
let precio2 = Producto2.precio * Producto2.cantidad
let precio3 = Producto3.precio * Producto3.cantidad
let precio4 = Producto4.precio * Producto4.cantidad
let preciototal = precio1 + precio2 + precio3 + precio4;
alert ("Precio total = " + preciototal);


console.log(productos);



