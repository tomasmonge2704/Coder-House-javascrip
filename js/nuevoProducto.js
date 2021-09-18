//crea nuevo producto y carga elementos del local
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
    localStorage.setItem("listaProductos", JSON.stringify(productos));
    /*llamo a la funcion render*/
    cargarelementosdellocal();
}  

function  borrarProducto() {
  
    
  }