$("#menuHamburguesa").click(function () {
  $(".menuResponsive").toggle(300).addclass(".mostrar");
});


class Producto{ 
  constructor(nombre, stock, precio, tipo){
  this.nombre = nombre;
  this.stock = stock;
  this.precio = precio;
  this.tipo = tipo;
  this.venta = function(cantidadComprada){
    this.stock -= cantidadComprada
    console.log("Se vendieron " + cantidadComprada + " " + this.nombre)
  }
}
}

const productoA = new Producto("cesto mimbre", 10, 2700, "mimbre")
const productoB = new Producto("bolso rustico", 10, 2250, "tejido")
const productoC = new Producto("atrapa sueños", 10, 1800, "macrame")
const productoD = new Producto("cuadro tres partes", 10, 2700, "cuadro")
const productoE = new Producto("pulsera macrame", 10, 500, "macrame")
const productoF = new Producto("acentro de mesa", 10, 1500, "mimbre")
const productoG = new Producto("cuadro naturaleza", 10, 4700, "cuadro")

const Productos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG];

const menorPrecio = Productos.filter(Producto => Producto.precio <= 1500);
const precioMedio = Productos.filter(Producto => Producto.precio >= 1501 && Producto.precio <= 4000);
const mayorPrecio = Productos.filter(Producto => Producto.precio >= 4001);
const tipoMimbre = Productos.filter(Producto => Producto.tipo == 'mimbre');
const tipoTejido = Productos.filter(Producto => Producto.tipo == 'tejido');
const tipoMacrame = Productos.filter(Producto => Producto.tipo == 'macrame');
const tipoCuadro = Productos.filter(Producto => Producto.tipo == 'cuadro');


let filtroPrecio = parseInt(prompt('Quiere filtrar la lista de productos por precio? \n  Opcion 1 Menos de $1.500 \n Opcion 2 Entre $1.501 y $4.000 \n Opcion 3 Mas de $4.000'));

switch(filtroPrecio){

  case 1:
    console.log(menorPrecio);
    break
  case 2:
    console.log(precioMedio);
    break
  case 3:
    console.log(mayorPrecio);
    break
  default:
    alert('No tenemos mas productos de ese precio');
}

let filtroTipo = parseInt(prompt('Quiere filtrar la lista de productos por tipo de articulo? \n  Opcion 1 Articulos de mimbre \n Opcion 2 Articulos Tejidos \n Opcion 3 Articulos de Macrame \n Opcion 4 Cuadros'));

switch(filtroTipo){

  case 1:
    console.log(tipoMimbre);
    break
  case 2:
    console.log(tipoTejido);
    break
  case 3:
    console.log(tipoMacrame);
    break
  case 4:
    console.log(tipoCuadro);
    break
  default:
    alert('No tenemos esos productos');
}

let nombre = prompt("¿Cómo es tu nombre?");
let apellido = prompt("¿Cómo es tu apellido?");
alert("¡¡Hola" + " " + nombre + " " + apellido + " " + "!!");
let cantidadProductos = parseInt(
  prompt("Cuantos articulos diferentes vas a comprar? 1, 2, 3, 4, 5, 6 o 7")
);

let montoApagar = 0;
let cantidadComprada;

function faltaStock(stock) {
  alert(
    "Solo puedes comprar " +
      stock +
      " unidades de este producto. Muchas gracias"
  );
}


function stockSuficiente(stock, precio, cantidadComprada) {
  stock -= cantidadComprada;
  montoApagar += cantidadComprada * precio;
  console.log("te quedan en stock " + stock);
}

function compraFinal(stock, precio, producto) {
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if (cantidadComprada <= stock) {
       stockSuficiente(stock, precio, cantidadComprada); 
       producto.venta(cantidadComprada)
  } 
  else {
    faltaStock(stock);
  }
}

for (let i = 0; i < cantidadProductos; i++) {
  let compra = prompt(
    "¿Qué artículo deseas comprar?" +
      "\n1 " +
      Productos[0].nombre +
      "\n2 " +
      Productos[1].nombre +
      "\n3 " +
      Productos[2].nombre +
      "\n4 " +
      Productos[3].nombre +
      "\n5 " +
      Productos[4].nombre +
      "\n6 " +
      Productos[5].nombre +
      "\n7 " +
      Productos[6].nombre);
  

  if (compra == Productos[0].nombre) {
    compraFinal(Productos[0].stock, Productos[0].precio, Productos[0]);
  } 
  else if (compra == Productos[1].nombre) {
    compraFinal(Productos[1].stock, Productos[1].precio, Productos[1]);
  } 
  else if (compra == Productos[2].nombre) {
    compraFinal(Productos[2].stock, Productos[2].precio, Productos[2]);
  } 
  else if (compra == Productos[3].nombre) {
    compraFinal(Productos[3].stock, Productos[3].precio, Productos[3]);
  }
  else if (compra == Productos[4].nombre) {
    compraFinal(Productos[4].stock, Productos[4].precio, Productos[4]);
  } 
  else if (compra == Productos[5].nombre) {
    compraFinal(Productos[5].stock, Productos[5].precio, Productos[5]);
  } 
  else if (compra == Productos[6].nombre) {
    compraFinal(Productos[6].stock, Productos[6].precio, Productos[6]);
  }
}

alert(
  "Tu compra tiene un valor de: " +
    montoApagar +
    " pesos"
);

//ingresar productos de otra manera

/* Productos.push(new Producto("cesto mimbre", 10, 2700));
Productos.push(new Producto("bolso rustico", 10, 2250));
Productos.push(new Producto("atrapa sueños", 10, 1800));
Productos.push(new Producto("cuadro tres partes", 10, 2700));
Productos.push(new Producto("pulsera macrame", 10, 500));
Productos.push(new Producto("acentro de mesa", 10, 2500));
Productos.push(new Producto("cuadro naturaleza", 10, 2900)); */