import { database, app } from "./lib/firebaseLib.js";
import {ref,set,update, onValue}  from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

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

let productos_Array = []

function showProducts(products) {
  let productsArray = Object.keys(products).map((key) => products[key]);
  Array.prototype.push.apply(productos_Array, productsArray);
  console.log(productos_Array);
  productsArray.forEach(producto => {
    $("#product-list").append(  `<div class="prodCard col mb-5">
    <div class="card h-100">
   
        <img class="card-img-top" src="${producto.img}" alt="..." />
        
        <div class="card-body p-4">
        <div class="col mb-5">
        <div class="modal-headernombre">
        <h5 class="fw-bolder" id="idNombre">${producto.Nombre}</h5>  
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
  $("#product-list").append(  `<div class="prodCard col mb-5">
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


$('body').on('click', '.botonBorrar', function(e) {
  const button = e.target;
  const item = button.closest('.col');
  const nombreProd = item.querySelector('.fw-bolder').textContent;
  const card = button.closest('.prodCard');
  const nombre = null;
  const precio = null;
  const cantidad = null;
  const img = null;
  const db = database;
  update(ref(db, 'Productos/' + nombreProd), {
    Nombre: nombre,
    Precio: precio,
    Cantidad: cantidad,
    img : img
  }); 
  card.remove();
});

//carrito
const tbody = document.querySelector('#carritotbody')
const carrito = [];
var contador = 0;
let totalFinal = 0;
/*agrega al carrito */
$('body').on('click', '#botonCarrito', function(e) {
  contador = contador + 1;
  const button = e.target
  const item = button.closest('.col');
  const nombreProd = item.querySelector('.fw-bolder').textContent;
  const producto = productos_Array.find(objProd => objProd.Nombre === nombreProd);
  const InputElemnto = tbody.getElementsByClassName('input__elemento');
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].Nombre.trim() === producto.Nombre.trim()){
      carrito[i].Cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      cargarTotal()
      return null;
    }
  }
    $("#carritotbody").append( `<tr>
    <th scope="row"> ${contador} </th>
    <td><img class="imgCarrito" src="${producto.img}" alt="..." /></td>
    <td class="nombre">${producto.Nombre}</td>
    <td>$${producto.Precio}</td>
    <td> <input type="number" min="1" value=${producto.Cantidad} class="w44 input__elemento"> <button class="delete btn btn-danger botonBorrarCarrito">x</button></td>
    </tr>
    `);
  carrito.push(producto);
   carritoRenderCantidad();
   localStorage.setItem("carrito", JSON.stringify(carrito));
   cargarTotal();
});
 /*carga carrito del local storage */
function cargar_carrito() {
 if (localStorage.getItem('carrito')){
  const almacenados = JSON.parse(localStorage.getItem("carrito"));
  for (const producto of almacenados) {
    contador = contador + 1;
    $("#carritotbody").append( `<tr>
    <th scope="row"> ${contador} </th>
    <td><img class="imgCarrito" src="${producto.img}" alt="..." /></td>
    <td class="nombre">${producto.Nombre}</td>
    <td>$${producto.Precio}</td>
    <td> <input type="number" min="1" value=${producto.Cantidad} class="w44 input__elemento"> <button class="delete btn btn-danger botonBorrarCarrito">x</button></td>
    </tr>
    `);
    carrito.push(producto);
    }
    carritoRenderCantidad();
    cargarTotal();   
  }
  else{
  }
  }
cargar_carrito();

/*borra productos del carrito*/
window.addEventListener('load', function() {
  $('#carritotbody').on('click','.botonBorrarCarrito', function(e) {
    const button = e.target;
    const item = button.closest('tr');
    const nombreProd = item.querySelector('.nombre').textContent;
    const producto = productos_Array.find(objProd => objProd.Nombre === nombreProd);
    for(let i=0; i<carrito.length ; i++){

      if(carrito[i].Nombre.trim() === nombreProd.trim()){
        carrito.splice(i, 1)
      }
    }
    item.remove();
    localStorage.removeItem('carrito', producto);
    contador = contador - 1;
    carritoRenderCantidad();
    cargarTotal();
  });
  $('#carritotbody').on('change','#inputCantidad', function(e) {
    cargarTotal ();
  });
});

//funciones
 

function carritoRenderCantidad (){
  const cantidadelementos = document.querySelector('.carritoCantidad')
  cantidadelementos.innerHTML = `${contador}`
}
function cargarTotal (){
  let Total = 0;
  const itemCartTotal = document.querySelector('#Total')
  carrito.forEach((item) => {
    const precio = Number(item.Precio.replace("$", ''))
    Total = Total + precio*item.Cantidad
  })

 itemCartTotal.innerHTML = `$${Total}`
}