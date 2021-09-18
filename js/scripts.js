

class Producto {
    constructor(nombre, precio, cantidad, img) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.img = img
    }
}

/*Array productos*/
const productos = [];

/*LOCALSTORAGE*/
if (localStorage.getItem('listaProductos')) {   
}
else {
  
localStorage.setItem("listaProductos", JSON.stringify(productos));
}

/* DOM */

  function cargarelementosdellocal() {
     
    const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
     /*recorre todos los productos que esten en el localstorage*/
    for (const producto of almacenados) {

      $("#product-list").append(  `<div class="col mb-5">
        <div class="card h-100">
       
            <img class="card-img-top" src="${producto.img}" alt="..." />
            
            <div class="card-body p-4">
            <div class="col mb-5">
            <div class="modal-headernombre">
            <h5 class="fw-bolder">  ${producto.nombre}</h5>  
            </div>
            <p class="precioProd">  $${producto.precio}</p>
            <p class="cantProd">  cantidad: ${producto.cantidad}</p>
            </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="button btn btn-outline-dark mt-auto" onclick="cargarCarrito()" href="#carritotbody" >Agregar al carrito</a> <button class="delete btn btn-danger">x</button></div>
                
            </div>
        </div>
     </div>
        `);
        
    }
  }

cargarelementosdellocal();



