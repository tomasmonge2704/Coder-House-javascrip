
class Producto_Nuevo {
  constructor(nombre, precio, cantidad, img) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
      this.img = img
  }
}
/*Array productos*/

const lista_productos = [];

for (var i=0; i< jsonObject.Productos.length; i++)
    {
  
        var Productojson = jsonObject.Productos[i]
       
        lista_productos.push(Productojson);
    }

    console.log(lista_productos);
  

/*LOCALSTORAGE*/
function Agregar_al_LocalStorage_Productos(){
  localStorage.setItem("lista_de_Productos_Local", JSON.stringify(lista_productos));
}

if (localStorage.getItem('lista_de_Productos_Local')) {   
 
}
else {
  Agregar_al_LocalStorage_Productos()
}

/* Render local storage */

function cargar_elementos_del_local() {
     
  const almacenados = JSON.parse(localStorage.getItem("lista_de_Productos_Local"));
   
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
              <div class="text-center"><a class="button btn btn-outline-dark mt-auto"  ref="${producto.nombre}" href="#carritotbody" >Agregar al carrito</a> <button class="delete btn btn-danger">x</button></div>
              
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
  const Prod = new Producto_Nuevo(nomb,pre,cant,img);
  lista_productos.push(Prod);
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
                <div class="text-center"><a class="button btn btn-outline-dark mt-auto"  href="#carritotbody" >Agregar al carrito</a> <button class="delete btn btn-danger">x</button></div>
                
            </div>
        </div>
     </div>
        `);
}  