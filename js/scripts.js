

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
            <p class="precioProd">  $${producto.precio}</p>
            <p class="cantProd">  cantidad: ${producto.cantidad}</p>
            </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="button btn btn-outline-dark mt-auto" onclick="cargarCarrito()" href="#carritotbody" >Agregar al carrito</a></div>
            </div>
        </div>
    </div>
        `;
        productList.appendChild(element);
    }
    }
      
    

cargarelementosdellocal();

let contador = 0;
const Clickbutton = document.querySelectorAll('.button')
Clickbutton.forEach(btn => {
    btn.addEventListener('click', cargarCarrito)
  })


function cargarCarrito (e){
    contador++;
    /*saco datos*/
    const button = e.target;
    const item = button.closest('.card');
    const itemTitle = item.querySelector('.fw-bolder').textContent;
    const itemPrice = item.querySelector('.precioProd').textContent;
    const itemCant = item.querySelector('.cantProd').textContent;
    /*creo Div*/
    let div = document.createElement('tr');
    const productList = document.getElementById("carritotbody");
    const element = document.createElement("tr");
    element.innerHTML = `<tr>
    <th scope="row"> ${contador} </th>
    <td>${itemTitle}</td>
    <td>${itemPrice}</td>
    <td>${itemCant}</td>
  </tr>
    `;
    productList.appendChild(element);
    
}
console.log(productos);  