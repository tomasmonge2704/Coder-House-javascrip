/*Productos harcodeados*/
const Producto1 = new Producto("Adidas","500", "1","assets/img/adidas.jpg");
const Producto2 = new Producto("Nike","500", "1","assets/img/nike.jpg");
const Producto3 = new Producto("PUMA","500", "1","assets/img/puma.jpg");
const Producto4 = new Producto("John Foos","500", "1","assets/img/foos.jpg");

const prodDefault = [Producto1, Producto2, Producto3, Producto4];

for (const producto of prodDefault) {
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
