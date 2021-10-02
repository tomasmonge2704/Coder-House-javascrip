var contador = 0;
let totalFinal = 0;
let carrito = [];
let Clickbutton = document.querySelectorAll('.button');
Clickbutton.forEach(btn => {
    btn.addEventListener('click', cargarCarrito)
  })


  function cargarCarrito (e){
    
    /*saco datos del html*/
    const button = e.target;
    const item = button.closest('.card');
    const itemTitle = item.querySelector('.fw-bolder').textContent;
    const itemPrice = item.querySelector('.precioProd').innerHTML;
    const itemCant = item.querySelector('.cantProd').innerHTML;
     /*precio y cantidad*/
     const precio = Number(itemPrice.replace("$",''))
     const cantidad = Number(itemCant.replace("cantidad:",''))
     totalFinal = totalFinal + precio * cantidad;
    cargarTotal()
    carrito.push(precio, cantidad);
    console.log(carrito);
    /*creo row*/
    contador = contador + 1;
    $("#carritotbody").append( `<tr>
    <th scope="row"> ${contador} </th>
    <td>${itemTitle}</td>
    <td>${itemPrice}</td>
    <td> <input type="number" min="1" value=${cantidad} class="w44"> <button class="delete btn btn-danger">x</button></td>
  </tr>
    `);
    cargarTotal();
    function carritoRenderCantidad (){
      const cantidadelementos = document.querySelector('.carritoCantidad')
      cantidadelementos.innerHTML = `${contador}`
    }
    carritoRenderCantidad();
   
  }


 function cargarTotal (){
  const itemCartTotal = document.querySelector('#Total')
 itemCartTotal.innerHTML = `$${totalFinal}`
 }

