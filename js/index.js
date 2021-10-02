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
            <div class="text-center"><a class="button btn btn-outline-dark mt-auto"  ref="${producto.Nombre}" href="#carritotbody" >Agregar al carrito</a> <button class="delete btn btn-danger">x</button></div>
            
        </div>
    </div>
 </div>
    `);
  })
  
}

GetProducts();

function writeUserData( name, email, imageUrl) {
  const db = database;
  set(ref(db, 'Productos/Adidas'), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
writeUserData();