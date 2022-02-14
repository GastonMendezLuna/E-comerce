

let nombre = prompt("¿Cómo es tu nombre?");
let apellido = prompt("¿Cómo es tu apellido?");
alert("¡¡Hola" + " " + nombre + " " + apellido + " " + "!!");


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
let stockD = 4;
let precioD = 3000;
let descuentoProductoD = precioD * 0.10;

let compra = prompt("¿Qué producto deseas comprar?");

if (compra == productoA){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  let montoApagar = cantidadComprada * precioA - descuentoProductoA * cantidadComprada;
  stock = stockA - cantidadComprada;

alert("Pago en efectivo tiene 10% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
}

else if (compra == productoB){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  let montoApagar = cantidadComprada * precioB - descuentoProductoB * cantidadComprada;
  stock = stockB - cantidadComprada;

alert("Pago en efectivo tiene 10% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
}

else if (compra == productoC){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  let montoApagar = cantidadComprada * precioC - descuentoProductoC * cantidadComprada;
  stock = stockC - cantidadComprada;

alert("Pago en efectivo tiene 10% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
}

else if (compra == productoD){
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  let montoApagar = cantidadComprada * precioD - descuentoProductoD * cantidadComprada;
  stock = stockD - cantidadComprada;

alert("Pago en efectivo tiene 10% de descuento. Por lo que pagaras " + montoApagar + " pesos");
  console.log("te quedan en stock " + stock);
}



 