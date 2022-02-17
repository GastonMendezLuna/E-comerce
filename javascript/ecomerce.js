
$("#menuHamburguesa").click(function () {

$(".menuResponsive").toggle(300).addclass('.mostrar');


});

let nombre = prompt("¿Cómo es tu nombre?");
let apellido = prompt("¿Cómo es tu apellido?");
alert("¡¡Hola" + " " + nombre + " " + apellido + " " + "!!");
let cantidadProductos = parseInt(prompt("Cuantos articulos diferentes vas a comprar? 1, 2, 3 o 4"));
alert("Los productos que tenemos en venta son: cesto mimbre, bolso rustico atrapa sueños y cuadro tres partes");


let productoA = "cesto mimbre";
let stockA = 10;
let precioA = 3000;
let descuentoProductoA = precioA * 0.15;

let productoB = "bolso rustico";
let stockB = 10;
let precioB = 2500;
let descuentoProductoB = precioB *0.15;

let productoC = "atrapa sueños";
let stockC = 10;
let precioC = 2000;
let descuentoProductoC = precioC * 0.15;


let productoD = "cuadro tres partes";
let stockD = 10;
let precioD = 3000;
let descuentoProductoD = precioD * 0.15;


function faltaStock(stock){
  alert("Solo puedes comprar " + stock + " unidades de este producto. Muchas gracias");
}




for (let i = 0; i < cantidadProductos; i++){
  let compra = prompt("¿Qué artículo deseas comprar? cesto mimbre, bolso rustico atrapa sueños y cuadro tres partes");

if (compra == productoA){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockA){
  stock = stockA - cantidadComprada;
  let montoApagar = cantidadComprada * precioA - descuentoProductoA * cantidadComprada;
  
alert("La compra de mas de 1 producto le otorga un 15% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
    }
else{
  faltaStock(stockA)
  
} 
}

else if (compra == productoB){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockB){
  stock = stockB - cantidadComprada;
  let montoApagar = cantidadComprada * precioB - descuentoProductoB * cantidadComprada;
  
alert("La compra de mas de 1 producto le otorga un 15% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
    }
else{
  faltaStock(stockB)
} 
}

else if (compra == productoC){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockC){
  stock = stockC - cantidadComprada;
  let montoApagar = cantidadComprada * precioC - descuentoProductoC * cantidadComprada;
  
alert("La compra de mas de 1 producto le otorga un 15% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
    }
else{
  faltaStock(stockC)
} 
}

else if (compra == productoD){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockD){
  stock = stockD - cantidadComprada;
  let montoApagar = cantidadComprada * precioD - descuentoProductoD * cantidadComprada;
  
alert("La compra de mas de 1 producto le otorga un 15% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
    }
else{
  faltaStock(stockD)
} 
}

}





