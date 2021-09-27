

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
function Agregar_al_LocalStorage_Productos(){
  localStorage.setItem("listaProductos", JSON.stringify(productos));
}

if (localStorage.getItem('listaProductos')) {   
}
else {
  /*Productos harcodeados*/
 const Producto1 = new Producto("Adidas","500", "1","assets/img/adidas.jpg");
 const Producto2 = new Producto("Nike","500", "1","assets/img/nike.jpg");
 const Producto3 = new Producto("PUMA","500", "1","assets/img/puma.jpg");
 const Producto4 = new Producto("John Foos","500", "1","assets/img/foos.jpg");
  productos.push(Producto1);
  productos.push(Producto2);
  productos.push(Producto3);
  productos.push(Producto4);
  Agregar_al_LocalStorage_Productos()
}

/* Render local storage */

  function cargar_elementos_del_local() {
     
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
                <div class="text-center"><a class="button btn btn-outline-dark mt-auto" ref="${producto.nombre}" href="#carritotbody" >Agregar al carrito</a> <button class="delete btn btn-danger">x</button></div>
                
            </div>
        </div>
     </div>
        `);
        
    }
  }

  cargar_elementos_del_local();

function nuevoProducto() {
  /*Obtengo datos del input*/
  let nomb = document.getElementById("nomb").value;
  let pre = document.getElementById("pre").value;
  let cant = document.getElementById("cant").value;
  let img = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
  const Prod = new Producto(nomb,pre,cant,img);
  productos.push(Prod);
  /*Guardo en el local storage*/
  Agregar_al_LocalStorage_Productos()
  /*Render*/
  $("#product-list").append(  `<div class="col mb-5">
        <div class="card h-100">
       
            <img class="card-img-top" src="${img}" alt="..." />
            
            <div class="card-body p-4">
            <div class="col mb-5">
            <div class="modal-headernombre">
            <h5 class="fw-bolder">  ${nomb}</h5>  
            </div>
            <p class="precioProd">  $${pre}</p>
            <p class="cantProd">  cantidad: ${cant}</p>
            </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="button btn btn-outline-dark mt-auto" onclick="cargarCarrito()" href="#carritotbody" >Agregar al carrito</a> <button class="delete btn btn-danger">x</button></div>
                
            </div>
        </div>
     </div>
        `);
}  



