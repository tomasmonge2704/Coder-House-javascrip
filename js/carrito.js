import { productos_Array } from "./index.js";
//carrito
const tbody = document.querySelector("#carritotbody");
const carrito = [];
var contador = 0;
/*agrega al carrito */
$("body").on("click", "#botonCarrito", function (e) {
  contador = contador + 1;
  const button = e.target;
  const item = button.closest(".col");
  const nombreProd = item.querySelector(".fw-bolder").textContent;
  const producto = productos_Array.find(
    (objProd) => objProd.Nombre === nombreProd
  );
  const InputElemnto = tbody.getElementsByClassName("input__elemento");
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].Nombre.trim() === producto.Nombre.trim()) {
      carrito[i].Cantidad++;
      const inputValue = InputElemnto[i];
      inputValue.value++;
      cargarTotal();
      return null;
    }
  }
  $("#carritotbody").append(`<tr>
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

  $(".input__elemento").change(function (e) {
    const sumaInput = e.target;
    carrito.forEach((item) => {
      if (item.Nombre.trim() === producto.Nombre) {
        sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
        item.Cantidad = sumaInput.value;
        cargarTotal();
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
    });
  });
});
/*carga carrito del local storage */
function cargar_carrito() {
  if (localStorage.getItem("carrito")) {
    const almacenados = JSON.parse(localStorage.getItem("carrito"));
    for (const producto of almacenados) {
      contador = contador + 1;
      $("#carritotbody").append(`<tr>
    <th scope="row"> ${contador} </th>
    <td><img class="imgCarrito" src="${producto.img}" alt="..." /></td>
    <td class="nombre">${producto.Nombre}</td>
    <td>$${producto.Precio}</td>
    <td> <input type="number" min="1" value=${producto.Cantidad} class="w44 input__elemento"> <button class="delete btn btn-danger botonBorrarCarrito">x</button></td>
    </tr>
    `);
      carrito.push(producto);
      $(".input__elemento").change(function (e) {
        const sumaInput = e.target;
        carrito.forEach((item) => {
          if (item.Nombre.trim() === producto.Nombre) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.Cantidad = sumaInput.value;
            cargarTotal();
            localStorage.setItem("carrito", JSON.stringify(carrito));
          }
        });
      });
      
    }
    carritoRenderCantidad();
    cargarTotal();
    
  } 
}
cargar_carrito();

/*borra productos del carrito*/
window.addEventListener("load", function () {
  $("#carritotbody").on("click", ".botonBorrarCarrito", function (e) {
    const button = e.target;
    const item = button.closest("tr");
    const nombreProd = item.querySelector(".nombre").textContent;
    const producto = productos_Array.find(
      (objProd) => objProd.Nombre === nombreProd
    );
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].Nombre.trim() === nombreProd.trim()) {
        carrito.splice(i, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
    }
    item.remove();
    contador = contador - 1;
    carritoRenderCantidad();
    cargarTotal();
  });
});

//funciones

function carritoRenderCantidad() {
  const cantidadelementos = document.querySelector(".carritoCantidad");
  cantidadelementos.innerHTML = `${contador}`;
}
function cargarTotal() {
  let Total = 0;
  const itemCartTotal = document.querySelector("#Total");
  carrito.forEach((item) => {
    const precio = Number(item.Precio.replace("$", ""));
    Total = Total + precio * item.Cantidad;
  });

  itemCartTotal.innerHTML = `$${Total}`;
}
