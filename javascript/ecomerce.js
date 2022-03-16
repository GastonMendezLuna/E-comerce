
$("#menuHamburguesa").click(function () {
  $(".menuResponsive").toggle(370).addclass(".mostrar");
});




class producto{

  constructor(idValor, nombreValor, stockValor, precioValor, categoriaValor, imgValor){
  this.id = idValor;
  this.nombre = nombreValor;
  this.stock = stockValor;
  this.precio = precioValor;
  this.categoria = categoriaValor;
  this.img = imgValor;

  this.venta = function (cantidadComprada){
  this.stock -= cantidadComprada
  console.log( 'Se vendieron'+ cantidadComprada + ' ' + ' ' + this.nombre)
  }
  this.faltaStock = function(cantidadComprada){
  this.stock < cantidadComprada
  alert('No tenemos mas unidades, tenemos hasta 10 '  + this.nombre)
  }
  this.stockSuficiente = function(stock, precio, cantidadComprada){
  stock -= cantidadComprada;
  montoApagar += cantidadComprada * precio;
  console.log( 'Te quedan en stock '  + stock + ' ' + this.nombre);
  }
  }
}
  
  const productoA = new producto(1, 'cesto mimbre', 10, 2700, 'mimbre', "../img/card1.png")
  
  const productoB = new producto(2, 'bolso rustico', 10, 2250, 'tejido', "../img/card2.png")
  
  const productoC = new producto(3, 'atrapa sueños', 10, 1800, 'macrame', "../img/card3.png")
  
  const productoD = new producto(4, 'cuadro tres partes', 10, 2700, 'cuadro', "../img/card4.png")
  
  const productoE = new producto(5, 'pulsera macrame', 10, 500, 'macrame', "../img/card5.png")
  
  const productoF = new producto(6, 'centro de mesa', 10, 2500, 'mimbre', "../img/card6.png")
  
  const productoG = new producto(7, 'cuadro naturaleza', 10, 4700, 'cuadro', "../img/card7.png")
  
  const listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG]

 
  

   
  let objetos = document.querySelector('.objetos');
  
  let boton1 = document.querySelector('.btn1')

  /* for (const producto of listaProductos) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <article><button id="boton"><span>Comprame!</span></button></article>
                            </div>`


    document.body.appendChild(contenedor);
   
  } */

  boton1.addEventListener('click', todosPrecios)
  let flagtodosPrecios = 0;
  function todosPrecios(){
    todosPrecios = listaProductos.filter(Producto => Producto.precio >=1)

    for (const producto of listaProductos) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      document.body.appendChild(contenedor);
     
    }
  }

  

  let boton2 = document.querySelector('.btn2')

  boton2.addEventListener('click', menorPrecio)
  function menorPrecio(){
    menorPrecio = listaProductos.filter(producto => producto.precio <= 1500);

    for (const producto of menorPrecio) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      document.body.appendChild(contenedor);
     
    }
    
  }
  
  
  let boton3 = document.querySelector('.btn3')

  boton3.addEventListener('click', precioMedio)
  function precioMedio(){
    precioMedio = listaProductos.filter(producto => producto.precio <= 4000);
    for (const producto of precioMedio) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      document.body.appendChild(contenedor);
     
    }
  }
  
  let boton4 = document.querySelector('.btn4')

  boton4.addEventListener('click', mayorPrecio)
  function mayorPrecio(){
    mayorPrecio = listaProductos.filter(producto => producto.precio >= 4001);
    for (const producto of mayorPrecio) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      document.body.appendChild(contenedor);
     
    }
  }
  
  let boton5 = document.querySelector('.btn5')

  boton5.addEventListener('click', todasCategorias)
  function todasCategorias(){
    todasCategorias = Productos.filter(Producto => Productos);
    console.log(todasCategorias)
  }
  
  let boton6 = document.querySelector('.btn6')

  boton6.addEventListener('click', categoriaMimbre)
  function categoriaMimbre(){
    categoriaMimbre = Productos.filter(Producto => Producto.categoria == 'mimbre');
    console.log(categoriaMimbre)
  }
  
  let boton7 = document.querySelector('.btn7')

  boton7.addEventListener('click', categoriaTejido)
  function categoriaTejido(){
    categoriaTejido = Productos.filter(Producto => Producto.categoria == 'tejido');
    console.log(categoriaTejido)
  }
  
  let boton8 = document.querySelector('.btn8')

  boton8.addEventListener('click', categoriaMacrame)
  function categoriaMacrame(){
    categoriaMacrame = Productos.filter(Producto => Producto.categoria == 'macrame');
    console.log(categoriaMacrame);
  }
  
  let boton9 = document.querySelector('.btn9')

  boton9.addEventListener('click', categoriaCuadro)
  function categoriaCuadro(){
    categoriaCuadro = Productos.filter(Producto => Producto.categoria == 'cuadro');
    console.log(categoriaCuadro)
  }
  
  
  
  /* 
   let card1 = document.querySelector('.card1');
  let card2 = document.querySelector('.card2');
  let card3 = document.querySelector('.card3');
  let card4 = document.querySelector('.card4');
  let card5 = document.querySelector('.card5');
  let card6 = document.querySelector('.card6');
  let card7 = document.querySelector('.card7'); 

  
}
   

  let montoApagar = 0;
  
  let cantidadComprada;
  
  function compraFinal(producto) {
  
  let precio = producto.precio;
  
  let stock = producto.stock;
  
  let cantidadComprada = parseInt(prompt('¿cuantas unidades?'));
  
  if (cantidadComprada <= stock) {
  
  producto.stockSuficiente(stock, precio, cantidadComprada);
  
  producto.venta(cantidadComprada)
  
  }
  
  else {
  
  producto.faltaStock(stock);
  
  }
  
  }
  
  let seguirComprando = prompt("¿Desea comprar? si/no");
  
  while (seguirComprando == "si") {
  
    let compra = prompt("¿Qué artículo deseas comprar?" +
  
  '\n1 ' +
  
  Productos[0].nombre +
  
  '\n2 ' +
  
  Productos[1].nombre +
  
  '\n3 ' +
  
  Productos[2].nombre +
  
  '\n4 ' +
  
  Productos[3].nombre +
  
  '\n5 ' +
  
  Productos[4].nombre +
  
  '\n6 ' +
  
  Productos[5].nombre +
  
  '\n7 ' +
  
  Productos[6].nombre);
  
  //No funcionaba esto por varios motivos. El mas importante, no habia un ciclo for!
  
  //Itero sobre Productos.length porque es mi array de productos. No confundir con la clase Producto. Este array debe ir en minuscula, no en mayusc
  
  for(let i = 0; i < Productos.length; i++)
  
  {
  
  if (compra == Productos[i].id) //matcheo por id. Lo agrege a la clase constructora
  
  {
  
  compraFinal(Productos[i]); //con enviar el producto es suficiente, luego accedo a sus properties
  
  }
  
  }
  
  seguirComprando = prompt('¿Desea comprar? si/no');
  
  }

  let compra1 = document.querySelector('.compra1');
  compra1.addEventListener('click', compraCesto)
  function compraCesto(poducto){
    compraFinal(productoA);

  

    console.log(compraFinal)
  }

  let compra2 = document.querySelector('.compra2');

  let compra3 = document.querySelector('.compra3');

  let compra4 = document.querySelector('.compra4');

  let compra5 = document.querySelector('.compra5');

  let compra6 = document.querySelector('.compra6');

  let compra7 = document.querySelector('.compra7'); */
 
 
/*class Producto{ 
  constructor(nombre, stock, precio, categoria){
  this.nombre = nombre;
  this.stock = stock;
  this.precio = precio;
  this.categoria = categoria;
  this.venta = function (cantidadComprada){
    this.stock -= cantidadComprada
    console.log("Se vendieron " + cantidadComprada + " " + " " + this.nombre)
    
  }
  this.faltaStock = function(cantidadComprada){
    this.stock < cantidadComprada
    alert("No tenemos mas unidades, tenemos hasta 10 " + this.nombre)
  }

  this.stockSuficiente = function(stock, precio, cantidadComprada){
    stock -= cantidadComprada;
  montoApagar += cantidadComprada * precio;
  console.log("te quedan en stock " + stock + " " + this.nombre);
  }

}
}

const productoA = new Producto("cesto mimbre", 10, 2700, "mimbre")
const productoB = new Producto("bolso rustico", 10, 2250, "tejido")
const productoC = new Producto("atrapa sueños", 10, 1800, "macrame")
const productoD = new Producto("cuadro tres partes", 10, 2700, "cuadro")
const productoE = new Producto("pulsera macrame", 10, 500, "macrame")
const productoF = new Producto("centro de mesa", 10, 2500, "mimbre")
const productoG = new Producto("cuadro naturaleza", 10, 4700, "cuadro")

const Productos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG];




 const menorPrecio = Productos.filter(Producto => Producto.precio <= 1500);
const precioMedio = Productos.filter(Producto => Producto.precio <= 4000);
const mayorPrecio = Productos.filter(Producto => Producto.precio >= 4001);


const categoriaMimbre = Productos.filter(Producto => Producto.categoria == 'mimbre');
const categoriaTejido = Productos.filter(Producto => Producto.categoria == 'tejido');
const categoriaMacrame = Productos.filter(Producto => Producto.categoria == 'macrame');
const categoriaCuadro = Productos.filter(Producto => Producto.categoria == 'cuadros');


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

let objetos = document.querySelector('.objetos');

let boton1 = document.querySelector('.btn1')

let boton2 = document.querySelector('.btn2')

let boton3 = document.querySelector('.btn3')

let boton4 = document.querySelector('.btn4')

let boton5 = document.querySelector('.btn5')

let boton6 = document.querySelector('.btn6')

let boton7 = document.querySelector('.btn7')

let boton8 = document.querySelector('.btn8')

let boton9 = document.querySelector('.btn9')



let flagMimbre = 0;
let flagTejido = 0;
let flagMacrame = 0;
let flagCuadro = 0;

let todas = document.querySelector('.objetos')
let Mimbre = document.querySelector('.categoriaMimbre')
let Tejido = document.querySelector('.categoriaTejido')
let Macrame = document.querySelector('.categoriaMacrame')
let Cuadro = document.querySelector('.categoriaCuadro')

boton5.addEventListener('click', function(){renderProductos("Mimbre, Tejido, Macrame, cuadro")})
boton6.addEventListener('click', function(){renderProductos("Mimbre")})
boton7.addEventListener('click', function(){renderProductos("Tejido")})
boton8.addEventListener('click', function(){renderProductos("Macrame")})
boton9.addEventListener('click', function(){renderProductos("Cuadro")})



 

let filtroCategoria= parseInt(prompt('Quiere filtrar la lista de productos por tipo de articulo? \n  Opcion 1 Articulos de mimbre \n Opcion 2 Articulos Tejidos \n Opcion 3 Articulos de Macrame \n Opcion 4 Cuadros'));

switch(filtroCategoria){

  case 1:
    console.log(categoriaMimbre);
    break
  case 2:
    console.log(categoriaTejido);
    break
  case 3:
    console.log(categoriaMacrame);
    break
  case 4:
    console.log(categoriaCuadro);
    break
  default:
    alert('No tenemos esos productos');
}
 

let montoApagar = 0;
let cantidadComprada;



function compraFinal(stock, precio, producto) {
  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if (cantidadComprada <= stock) {
       producto.stockSuficiente(stock, precio, cantidadComprada); 
       producto.venta(cantidadComprada)
  } 
  else {
    producto.faltaStock(stock);
  }
}
let seguirComprando = prompt("¿Desea comprar? si/no");

while (seguirComprando == "si") {
  
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
  

  if (compra == Producto[i].nombre) {
    compraFinal(Producto[i].stock, Producto[i].precio, Producto[i]);
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
  alert(
    "Tu compra tiene un valor de: " +
      montoApagar +
      " pesos"
  );  

  seguirComprando = prompt("¿Desea comprar? si/no");
} */


