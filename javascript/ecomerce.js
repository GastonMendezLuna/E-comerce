






$("#menuHamburguesa").click(function () {

$(".menuResponsive").toggle(300).addclass('.mostrar');


});

/*let nombre = prompt("¿Cómo es tu nombre?");
let apellido = prompt("¿Cómo es tu apellido?");
alert("¡¡Hola" + " " + nombre + " " + apellido + " " + "!!");
alert("Los productos que tenemos en venta son: cesto mimbre, bolso rustico, atrapa sueños y cuadro tres partes ")


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

let compra = prompt("¿Qué producto deseas comprar?");

if (compra == productoA){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockA){
  stock = stockA - cantidadComprada;
  let montoApagar = cantidadComprada * precioA - descuentoProductoA * cantidadComprada;
  
alert("Pago en efectivo tiene 10% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
    }
else{
  alert("Solo puedes comprar " + stockA + " unidades de este producto. Muchas gracias")
} 
}

else if (compra == productoB){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockB){
  stock = stockB - cantidadComprada;
  let montoApagar = cantidadComprada * precioB - descuentoProductoB * cantidadComprada;
  
alert("Pago en efectivo tiene 10% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
    }
else{
  alert("Solo puedes comprar " + stockB + " unidades de este producto. Muchas gracias")
} 
}

else if (compra == productoC){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockC){
  stock = stockC - cantidadComprada;
  let montoApagar = cantidadComprada * precioC - descuentoProductoC * cantidadComprada;
  
alert("Pago en efectivo tiene 10% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
    }
else{
  alert("Solo puedes comprar " + stockC + " unidades de este producto. Muchas gracias")
} 
}

else if (compra == productoD){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if(cantidadComprada <= stockD){
  stock = stockD - cantidadComprada;
  let montoApagar = cantidadComprada * precioD - descuentoProductoD * cantidadComprada;
  
alert("Pago en efectivo tiene 10% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
    }
else{
  alert("Solo puedes comprar " + stockD + " unidades de este producto. Muchas gracias")
} 
}*/