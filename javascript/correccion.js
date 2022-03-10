$(“#menuHamburguesa”).click(function () {

$(“.menuResponsive”).toggle(370).addclass(“.mostrar”);

});

//Importantisimo: faltaba la propertie id. Con ella nos guiaremos para acceder a productos y hacerlos unicos uno de otro

class Producto{

constructor(id, nombre, stock, precio, categoria){

this.id \= id;

this.nombre \= nombre;

this.stock \= stock;

this.precio \= precio;

this.categoria \= categoria;

this.venta \= function (cantidadComprada){

this.stock -= cantidadComprada

console.log(“Se vendieron ” + cantidadComprada + “ ” + “ ” + this.nombre)

}

this.faltaStock \= function(cantidadComprada){

this.stock < cantidadComprada

alert(“No tenemos mas unidades, tenemos hasta 10 ” + this.nombre)

}

this.stockSuficiente \= function(stock, precio, cantidadComprada){

stock -= cantidadComprada;

montoApagar += cantidadComprada * precio;

console.log(“te quedan en stock ” + stock + “ ” + this.nombre);

}

}

}

const productoA \= new Producto(1, “cesto mimbre”, 10, 2700, “mimbre”)

const productoB \= new Producto(2, “bolso rustico”, 10, 2250, “tejido”)

const productoC \= new Producto(3, “atrapa sueños”, 10, 1800, “macrame”)

const productoD \= new Producto(4, “cuadro tres partes”, 10, 2700, “cuadro”)

const productoE \= new Producto(5, “pulsera macrame”, 10, 500, “macrame”)

const productoF \= new Producto(6, “centro de mesa”, 10, 2500, “mimbre”)

const productoG \= new Producto(7, “cuadro naturaleza”, 10, 4700, “cuadro”)

const Productos \= [productoA, productoB, productoC, productoD, productoE, productoF, productoG];

let objetos \= document.querySelector(‘.objetos’);

let boton1 \= document.querySelector(‘.btn1’)

let boton2 \= document.querySelector(‘.btn2’)

let boton3 \= document.querySelector(‘.btn3’)

let boton4 \= document.querySelector(‘.btn4’)

let boton5 \= document.querySelector(‘.btn5’)

let boton6 \= document.querySelector(‘.btn6’)

let boton7 \= document.querySelector(‘.btn7’)

let boton8 \= document.querySelector(‘.btn8’)

let boton9 \= document.querySelector(‘.btn9’)

let flagMimbre \= 0;

let flagTejido \= 0;

let flagMacrame \= 0;

let flagCuadro \= 0;

let todas \= document.querySelector(‘.objetos’)

let Mimbre \= document.querySelector(‘.categoriaMimbre’)

let Tejido \= document.querySelector(‘.categoriaTejido’)

let Macrame \= document.querySelector(‘.categoriaMacrame’)

let Cuadro \= document.querySelector(‘.categoriaCuadro’)

//aca pruebo eventos, por eso borre los otros. Vos no los borres.

//vale aclarar que agregue al html esto:

// PRUEBA

boton1.addEventListener(‘click’, function(){renderProductos(“Cuadro”)})

//recorda que esta funcion recibe un unico parametro, el objeto a renderizar.

function renderProductos(string)

{

console.log(“probando el evento, funciona! ” + string);

}

let montoApagar \= 0;

let cantidadComprada;

function compraFinal(producto) {

let precio \= producto.precio;

let stock \= producto.stock;

let cantidadComprada \= parseInt(prompt(“¿cuantas unidades?”));

if (cantidadComprada <= stock) {

producto.stockSuficiente(stock, precio, cantidadComprada);

producto.venta(cantidadComprada)

}

else {

producto.faltaStock(stock);

}

}

let seguirComprando \= prompt(“¿Desea comprar? si/no”);

while (seguirComprando \== “si”) {

let compra \= prompt(“¿Qué artículo deseas comprar?” +

“\n1 ” +

Productos[0].nombre +

“\n2 ” +

Productos[1].nombre +

“\n3 ” +

Productos[2].nombre +

“\n4 ” +

Productos[3].nombre +

“\n5 ” +

Productos[4].nombre +

“\n6 ” +

Productos[5].nombre +

“\n7 ” +

Productos[6].nombre);

//No funcionaba esto por varios motivos. El mas importante, no habia un ciclo for!

//Itero sobre Productos.length porque es mi array de productos. No confundir con la clase Producto. Este array debe ir en minuscula, no en mayusc

for(let i \= 0; i < Productos.length; i++)

{

if (compra \== Productos[i].id) //matcheo por id. Lo agrege a la clase constructora

{

compraFinal(Productos[i]); //con enviar el producto es suficiente, luego accedo a sus properties

}

}

seguirComprando \= prompt(“¿Desea comprar? si/no”);

}