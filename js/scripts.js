

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


if (localStorage.getItem('listaProductos')) {
    
}
else {


/*LOCALSTORAGE*/
localStorage.setItem("listaProductos", JSON.stringify(productos));

}

/* DOM */



function nuevoProducto() {
    /*Obtengo datos del input*/
    let nomb = document.getElementById("nomb").value;
    let pre = document.getElementById("pre").value;
    let cant = document.getElementById("cant").value;
    let img = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
    
    /*creo el objeto del producto nuevo*/
    const Prod = new Producto(nomb,pre,cant,img);
    /*Guardo en el Array*/
    productos.push(Prod);
    console.log(productos);  
    /*Guardo en el local storage*/
    localStorage.setItem((nomb), JSON.stringify(Prod))
    localStorage.setItem("listaProductos", JSON.stringify(productos));
    /*llamo a la funcion*/
    cargarelementosdellocal();
    }  

  function  borrarProducto() {
    localStorage.clear()
    
  }

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
            <img class="card-img-top" src="${producto.img}" alt="..." />
            <div class="card-body p-4">
            <div class="col mb-5">
            <div class="modal-headernombre">
            <h5 class="fw-bolder">  ${producto.nombre}</h5>
           
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="borrarProducto()"></button>
            
            </div>
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


console.log(productos);  