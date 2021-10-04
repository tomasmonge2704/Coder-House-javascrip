import { database, app } from "./lib/firebaseLib.js";
import {ref,set, onValue}  from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

class ProductsService {
constructor (){
  this.database = database;
  this.productsRef = ref(this.database, 'Productos')
}
GetProducts(){
  const promise = new Promise((resolve, reject) => {
    onValue(this.productsRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);

    }, {
      onlyOnce: true
    });
  
  });
  return promise;
}

}


let productService = new ProductsService();

function GetProducts (){
  productService.GetProducts()
  .then((products) => {
    showProducts(products);
    console.log(products)
  })
  .catch(error => console.log(error));

}

function showProducts(products) {
  let productsArray = Object.keys(products).map((key) => products[key]);
  
  productsArray.forEach(producto => {
    $("#product-list").append(  `<div class="col mb-5">
    <div class="card h-100">
   
        <img class="card-img-top" src="${producto.img}" alt="..." />
        
        <div class="card-body p-4">
        <div class="col mb-5">
        <div class="modal-headernombre">
        <h5 class="fw-bolder">  ${producto.Nombre}</h5>  
        </div>
        <p class="precioProd">  $${producto.Precio}</p>
        <p class="cantProd">  cantidad: ${producto.Cantidad}</p>
        </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="button btn btn-outline-dark mt-auto" id="botonCarrito" ref="${producto.Nombre}" >Agregar al carrito</a> <button class="botonBorrar delete btn btn-danger" ref="${producto.Nombre}">x</button></div>
            
        </div>
    </div>
 </div>
    `);
  })
  
}

GetProducts();

function nuevoProducto() {
  const nombre = document.getElementById("nomb").value
  const precio = document.getElementById("pre").value
  const cantidad = document.getElementById("cant").value
  const img = document.getElementById("myfile").value

  const db = database;
  set(ref(db, 'Productos/'+nombre), {
    Nombre: nombre,
    Precio: precio,
    Cantidad: cantidad,
    img : img
  });
  /*Render*/
  $("#product-list").append(  `<div class="col mb-5">
        <div class="card h-100">
       
            <img class="card-img-top" src="${img}" alt="..." />
            
            <div class="card-body p-4">
            <div class="col mb-5">
            <div class="modal-headernombre">
            <h5 class="fw-bolder">  ${nombre}</h5>  
            </div>
            <p class="precioProd">  $${precio}</p>
            <p class="cantProd">  cantidad: ${cantidad}</p>
            </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="button btn btn-outline-dark mt-auto" id="botonCarrito" >Agregar al carrito</a> <button class="delete btn btn-danger">x</button></div>
                
            </div>
        </div>
     </div>
        `);
        
}
document.getElementById("botonSubir").addEventListener("click",nuevoProducto)

function borrarProducto(){
  console.log("funciona");
  const db = database;
  remove(ref(db, 'Productos/'+ producto.Nombre));
}


  $(".botonBorrar").click(function () { 
    console.log("funciona");
  });


