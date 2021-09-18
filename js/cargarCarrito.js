var contador = 0;
let totalFinal = 0;
const Clickbutton = document.querySelectorAll('.button');
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
    /*creo row*/
    contador = contador + 1;
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

function cargarTotal (){
  const itemCartTotal = document.querySelector('#Total')

itemCartTotal.innerHTML = `$${totalFinal}`
}
