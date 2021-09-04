

function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad  = cantidad;
}

const Producto1 = new Producto(prompt("Nombre del producto"),prompt("Precio del producto"), prompt("Cantidad del producto"));
const Producto2 = new Producto(prompt("Nombre del producto"),prompt("Precio del producto"), prompt("Cantidad del producto"));
const Producto3 = new Producto(prompt("Nombre del producto"),prompt("Precio del producto"), prompt("Cantidad del producto"));
const Producto4 = new Producto(prompt("Nombre del producto"),prompt("Precio del producto"), prompt("Cantidad del producto"));

const productos = [Producto1,Producto2,Producto3,Producto4];


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
/*LOCAL STORAGE*/

localStorage.setItem("PRO1", JSON.stringify(Producto1));
localStorage.setItem("PRO2", JSON.stringify(Producto2));
localStorage.setItem("PRO3", JSON.stringify(Producto3));
localStorage.setItem("PRO4", JSON.stringify(Producto4));
/* DOM */

document.getElementById('pr1').innerHTML = `<h5 class="fw-bolder">  ${Producto1.nombre}</h5>
                        <p>  $${Producto1.precio}</p>
                        <p>  cantidad: ${Producto1.cantidad}</p>`;

document.getElementById('pr2').innerHTML = `<h5 class="fw-bolder">  ${Producto2.nombre}</h5>
                        <p>  $${Producto2.precio}</p>
                        <p>  cantidad: ${Producto2.cantidad}</p>`;     
document.getElementById('pr3').innerHTML = `<h5 class="fw-bolder">  ${Producto3.nombre}</h5>
                        <p>  $${Producto3.precio}</p>
                        <p>  cantidad: ${Producto3.cantidad}</p>`;
document.getElementById('pr4').innerHTML = `<h5 class="fw-bolder">  ${Producto4.nombre}</h5>
                        <p>  $${Producto4.precio}</p>
                        <p>  cantidad: ${Producto4.cantidad}</p>`;


