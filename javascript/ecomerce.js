
$("#menuHamburguesa").click(function () {
  $(".menuResponsive").toggle(370).addclass(".mostrar");
});



//Importantisimo!! Faltaba el id
class Producto {
  constructor(id, nombre, stock, precio, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.categoria = categoria;

    this.venta = function (cantidadComprada) {
      this.stock -= cantidadComprada;
      console.log("Se vendieron " + cantidadComprada + " " + " " + this.nombre);
    };
    this.faltaStock = function (cantidadComprada) {
      this.stock < cantidadComprada;
      alert("No tenemos mas unidades, tenemos hasta 10 " + this.nombre);
    };

    this.stockSuficiente = function (stock, precio, cantidadComprada) {
      stock -= cantidadComprada;
      montoApagar += cantidadComprada * precio;
      console.log("te quedan en stock " + stock + " " + this.nombre);
    };
  }
}

const productoA = new Producto(1, "cesto mimbre", 10, 2700, "mimbre");
const productoB = new Producto(2, "bolso rustico", 10, 2250, "tejido");
const productoC = new Producto(3, "atrapa sueños", 10, 1800, "macrame");
const productoD = new Producto(4, "cuadro tres partes", 10, 2700, "cuadro");
const productoE = new Producto(5, "pulsera macrame", 10, 500, "macrame");
const productoF = new Producto(6, "centro de mesa", 10, 2500, "mimbre");
const productoG = new Producto(7, "cuadro naturaleza", 10, 4700, "cuadro");

//No confundir con la clase constructora. Usar minuscula (osea, const productos)
const listaProductos = [
  productoA,
  productoB,
  productoC,
  productoD,
  productoE,
  productoF,
  productoG,
];

const menorPrecio = listaProductos.filter((Producto) => Producto.precio <= 1500);
const precioMedio = listaProductos.filter((Producto) => Producto.precio <= 4000);
const mayorPrecio = listaProductos.filter((Producto) => Producto.precio >= 4001);

const categoriaMimbre = listaProductos.filter(
  (Producto) => Producto.categoria == "mimbre"
);
const categoriaTejido = listaProductos.filter(
  (Producto) => Producto.categoria == "tejido"
);
const categoriaMacrame = listaProductos.filter(
  (Producto) => Producto.categoria == "macrame"
);
const categoriaCuadro = listaProductos.filter(
  (Producto) => Producto.categoria == "cuadros"
);


/* let filtroPrecio = parseInt(prompt('Quiere filtrar la lista de productos por precio? \n  Opcion 1 Menos de $1.500 \n Opcion 2 Entre $1.501 y $4.000 \n Opcion 3 Mas de $4.000'));
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
}  */


//deberia ser un array de objetos. Ya lo tenes y se llama "Productos"

//Uso este de prueba
let boton1 = document.querySelector(".btn1");
let boton2 = document.querySelector(".btn2");
let boton3 = document.querySelector(".btn3");
let boton4 = document.querySelector(".btn4");
let boton5 = document.querySelector(".btn5");
let boton6 = document.querySelector(".btn6");
let boton7 = document.querySelector(".btn7");
let boton8 = document.querySelector(".btn8");


let flagMimbre = 0;
let flagTejido = 0;
let flagMacrame = 0;
let flagCuadro = 0;

let todas = document.querySelector(".objetos");
let Mimbre = document.querySelector(".categoriaMimbre");
let Tejido = document.querySelector(".categoriaTejido");
let Macrame = document.querySelector(".categoriaMacrame");
let Cuadro = document.querySelector(".categoriaCuadro");

boton1.addEventListener("click", function () {
  renderProductos(1);
});

//render productos va afuera, es una funcion apartque que hay que codear. Recibe un unico parametro, el id del objeto
function renderProductos(id) {
  //De nuevo itero para matchear id
  for (let i = 0; i < listaProductos.length; i++) {
    if (listaProductos[i].id == id) {
      //matcheo el id mandando con el del producto
      let div = document.getElementById("pruebaCard");
      div.innerHTML = ` 
                      <ul>
                        <li> ID: ${Producto[i].id}  </li>
                        <li> NOMBRE: ${Producto[i].nombre}   </li>
                        <li> STOCK: ${Producto[i].stock}   </li>
                        <li>  PRECIO: ${Producto[i].precio}  </li>
                        <li> CATEGORIA:   ${Producto[i].categoria}   </li>
                        <li> img:   ${Producto[i].img}   </li>
                      </ul>
      `;
    }
  }
}


boton5.addEventListener('click', function(){renderProductos("Mimbre, Tejido, Macrame, cuadro")})
boton6.addEventListener('click', function(){renderProductos("Mimbre")})
boton7.addEventListener('click', function(){renderProductos("Tejido")})
boton8.addEventListener('click', function(){renderProductos("Macrame")})



/* 
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
  */


let montoApagar = 0;
let cantidadComprada;

//Ahora recibe un unico parametro y de ahi accedo a las properties
function compraFinal(producto) {
  let stock = producto.stock;
  let precio = producto.precio;

  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if (cantidadComprada <= stock) {
    producto.stockSuficiente(stock, precio, cantidadComprada);
    producto.venta(cantidadComprada);
  } else {
    producto.faltaStock(stock);
  }
}
let seguirComprando = prompt("¿Desea comprar? si/no");

while (seguirComprando == "si") {
  let compra = prompt(
    "¿Qué artículo deseas comprar?" +
      "\n1 " +
      listaProductos[0].nombre +
      "\n2 " +
      listaProductos[1].nombre +
      "\n3 " +
      listaProductos[2].nombre +
      "\n4 " +
      listaProductos[3].nombre +
      "\n5 " +
      listaProductos[4].nombre +
      "\n6 " +
      listaProductos[5].nombre +
      "\n7 " +
      listaProductos[6].nombre
  );

  //Ciclo for que faltaba. Por eso "i" no existia
  //Ojo que ademas usabas la clase Producto en vez de tu array de productos

  for (let i = 0; i < Producto.length; i++) {
    //Siempre matcheo por id
    if (compra == Producto[i].id) {
      compraFinal(Producto[i]); //Con enviar el producto es suficiente, luego accedo a las properties
    }
  }

  seguirComprando = prompt("¿Desea comprar? si/no");
}

/*
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
  
  let tarjetas = document.querySelector ('.tarjetas')

  renderProductos(listaProductos);

  let boton1 = document.querySelector('.btn1')

  boton1.addEventListener('click', menorPrecio)

  function menorPrecio(){

    const menorPrecio = listaProductos.filter(producto => producto.precio <= 1500);
     
    tarjetas.innerHTML= ''

    for (const producto of menorPrecio) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton"  class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
      tarjetas.appendChild(contenedor);
      
      let compra1 = document.getElementById('#producto.1')
      
     
    }
    
  }
  
  
  let boton2 = document.querySelector('.btn2')

  boton2.addEventListener('click', precioMedio)

  function precioMedio(){

    const precioMedio = listaProductos.filter(producto => producto.precio <= 4000);
    
    tarjetas.innerHTML= ''

    for (const producto of precioMedio) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      tarjetas.appendChild(contenedor);
     
    }
  }
  
  let boton3 = document.querySelector('.btn3')

  boton3.addEventListener('click', mayorPrecio)

  function mayorPrecio(){

    const mayorPrecio = listaProductos.filter(producto => producto.precio >= 4001);

    tarjetas.innerHTML= ''

    for (const producto of mayorPrecio) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      tarjetas.appendChild(contenedor);
     
    }
  }
  
  
  
  let boton4 = document.querySelector('.btn4')

  boton4.addEventListener('click', categoriaMimbre)

  function categoriaMimbre(){

    const categoriaMimbre = listaProductos.filter(producto => producto.categoria == 'mimbre');

    tarjetas.innerHTML= ''
    
    for (const producto of categoriaMimbre) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      tarjetas.appendChild(contenedor);
     
    }
  }
  
  let boton5 = document.querySelector('.btn5')

  boton5.addEventListener('click', categoriaTejido)

  function categoriaTejido(){
    const categoriaTejido = listaProductos.filter(producto => producto.categoria == 'tejido');

    tarjetas.innerHTML= ''

    for (const producto of categoriaTejido) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      tarjetas.appendChild(contenedor);
     
    }
  }
  
  let boton6 = document.querySelector('.btn6')

  boton6.addEventListener('click', categoriaMacrame)

  function categoriaMacrame(){
    const categoriaMacrame = listaProductos.filter(producto => producto.categoria == 'macrame');

    tarjetas.innerHTML= ''
    
    for (const producto of categoriaMacrame) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      tarjetas.appendChild(contenedor);
     
    }
  }
  
  let boton7 = document.querySelector('.btn7')

  boton7.addEventListener('click', categoriaCuadro)

  function categoriaCuadro(){
    const categoriaCuadro = listaProductos.filter(producto => producto.categoria == 'cuadro');

    tarjetas.innerHTML= ''
    
    for (const producto of categoriaCuadro) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      tarjetas.appendChild(contenedor);
     
    }
  }
  
  let boton8 = document.querySelector('.btn8')

  boton8.addEventListener('click', renderProductos)

  function renderProductos(){
    const renderProductos = listaProductos.filter(producto => producto.precio >= 1);

    tarjetas.innerHTML= ''

    for (const producto of renderProductos) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `<div class="card">
                            <img src=${producto.img} class="imagen"/>
                            <div id="buttons"><button id="boton" class="botonTarjeta"><span>Comprame!</span></button></div>
                            </div>`
  
  
      tarjetas.appendChild(contenedor);
     
    }
  }
  
  
    
  


localStorage.setItem("listaProductosAlmacenados", JSON.stringify(listaProductos)) 
*/
   
  /*
  let montoApagar = 0;----
  
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
  
  
 
  //No funcionaba esto por varios motivos. El mas importante, no habia un ciclo for!
  
  //Itero sobre Productos.length porque es mi array de productos. No confundir con la clase Producto. Este array debe ir en minuscula, no en mayusc
  
  for(let i = 0; i < listaProductos.length; i++)
  
  {
  
  if (compra == listaProductos[i].id) //matcheo por id. Lo agrege a la clase constructora
  
  {
  
  compraFinal(listaProductos[i]); //con enviar el producto es suficiente, luego accedo a sus properties
  
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
} 
*/
 
