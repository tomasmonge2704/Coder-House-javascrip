
function agregaralcarrito  () {
    let producto = prompt ("ingrese su producto");
   var compras = "";
 
    while (producto != "no") {
       
        var compras = compras + ", " + producto ;
      
        alert ("sus producto ingreasado es: " + producto);
       
        producto = prompt ("ingrese su producto,en caso de no querer agregar mas productos escriba no");
        
        
        

        





    }
    alert ("sus productos en el carrito son :" + compras)
}
agregaralcarrito ();