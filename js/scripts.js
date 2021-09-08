

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
/*Productos harcodeados*/
const Producto1 = new Producto("Adidas","500", "5");
const Producto2 = new Producto("Nike","500", "5");
const Producto3 = new Producto("PUMA","500", "5");
const Producto4 = new Producto("John Foos","500", "5");

/*Array productos*/
const productos = [Producto1,Producto2,Producto3,Producto4];

if (localStorage.getItem('listaProductos')) {
    
}
else {

/*LOCALSTORAGE*/
localStorage.setItem("listaProductos", JSON.stringify(productos));
}

/* DOM */

/*carga todos los productos que esten en el localstorage*/

function cargarelementosdellocal() {
    
    const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
    for (const producto of almacenados) {
        /*creo Div*/
        let div = document.createElement('div');
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `<div class="col mb-5">
        <div class="card h-100">
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div class="card-body p-4">
            <div class="col mb-5">
            <h5 class="fw-bolder">  ${producto.nombre}</h5>
            <p>  $${producto.precio}</p>
            <p>  cantidad: ${producto.cantidad}</p>
            </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
            </div>
        </div>
    </div>
        `;
        productList.appendChild(element);
    }
    
}
cargarelementosdellocal();

function nuevoProducto() {
    /*Obtengo datos del input*/
    let nomb = document.getElementById("nomb").value;
    let pre = document.getElementById("pre").value;
    let cant = document.getElementById("cant").value;
    
    /*creo Div*/
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
    /*creo el objeto del producto nuevo*/
    const Producto5 = new Producto(nomb,pre,cant);
    productList.appendChild(element);
    /*Guardo en el Array*/
    productos.push(Producto5);
    console.log(productos);  
    /*Guardo en el local storage*/
    localStorage.setItem((nomb), JSON.stringify(Producto5))
    localStorage.setItem("listaProductos", JSON.stringify(productos));
    }  




console.log(productos);  