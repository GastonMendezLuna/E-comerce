
$("#menuHamburguesa").click(function () {

$(".menuResponsive").toggle(300).addclass('.mostrar');


});

let nombre = prompt("¿Cómo es tu nombre?");
let apellido = prompt("¿Cómo es tu apellido?");
alert("¡¡Hola" + " " + nombre + " " + apellido + " " + "!!");
let cantidadProductos = parseInt(prompt("Cuantos articulos diferentes vas a comprar? 1, 2, 3 o 4"));

let productoA = "cesto mimbre";
let stockA = 10;
let precioA = 3000;
let descuentoProductoA = precioA * 0.10;

let productoB = "bolso rustico";
let stockB = 10;
let precioB = 2500;
let descuentoProductoB = precioB *0.10;

let productoC = "atrapa sueños";
let stockC = 10;
let precioC = 2000;
let descuentoProductoC = precioC * 0.10;


let productoD = "cuadro tres partes";
let stockD = 10;
let precioD = 3000;
let descuentoProductoD = precioD * 0.10;


function faltaStock(stock){
  alert("Solo puedes comprar " + stock + " unidades de este producto. Muchas gracias");
}

let montoApagar= 0;
let cantidadComprada;

function totalDescuento(stock, precio, cantidadComprada, descuentoProducto){
  stock -= cantidadComprada;
  montoApagar = cantidadComprada * precio - descuentoProducto * cantidadComprada;
  console.log("te quedan en stock " + stock);
}


for (let i = 0; i < cantidadProductos; i++){
  let compra = prompt("¿Qué artículo deseas comprar? cesto mimbre, bolso rustico atrapa sueños y cuadro tres partes");

if (compra == productoA){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockA){
  
  totalDescuento(stockA, precioA, cantidadComprada, descuentoProductoA)

    }
else{
  faltaStock(stockA)
  
} 
}
  
else if (compra == productoB){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockB){
  totalDescuento(stockB, precioB,  cantidadComprada, descuentoProductoB)
    }
else{
  faltaStock(stockB)
} 
}
  else if (compra == productoC){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockB){
  totalDescuento(stockC, precioC,  cantidadComprada, descuentoProductoC)
    }
else{
  faltaStock(stockC)
} 
}

else if (compra == productoD){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockB){
  totalDescuento(stockD, precioD,  cantidadComprada, descuentoProductoD)
    }
else{
  faltaStock(stockC)
} 
}

alert("El pago en efectivo le otorga un 10% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  
}




