

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const Producto1 = new Producto("Zapatillas","50", "5");
const Producto2 = new Producto("Zapatillas","50", "5");
const Producto3 = new Producto("Zapatillas","50", "5");
const Producto4 = new Producto("Zapatillas","50", "5");

const productos = [Producto1,Producto2,Producto3,Producto4];

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



function nuevoProducto() {
    let nomb = document.getElementById("nomb").value;
    let pre = document.getElementById("pre").value;
    let cant = document.getElementById("cant").value;
    const Producto5 = new Producto(nomb,pre,cant);

    let div = document.createElement('div');

    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `<div class="col mb-5">
    
    <div class="card h-100">
        
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
       
        <div class="card-body p-4">
        <div class="col mb-5">
        <h5 class="fw-bolder">  ${nomb}</h5>
        <p>  $${pre}</p>
        <p>  cantidad: ${cant}</p>
        </div>
        </div>
      
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
        </div>
    </div>
</div>
    `;
    productList.appendChild(element);
    localStorage.setItem((nomb), JSON.stringify(Producto5))
    }  
    
   