$("#menuHamburguesa").click(function () {
  $(".menuResponsive").toggle(370).addclass(".mostrar");
});






class Producto{

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
  
  const productoA = new Producto(1, 'cesto mimbre', 10, 2700, 'mimbre', "../img/card1.png")
  
  const productoB = new Producto(2, 'bolso rustico', 10, 2250, 'tejido', "../img/card2.png")
  
  const productoC = new Producto(3, 'atrapa sueños', 10, 1800, 'macrame', "../img/card3.png")
  
  const productoD = new Producto(4, 'cuadro tres partes', 10, 2700, 'cuadro', "../img/card4.png")
  
  const productoE = new Producto(5, 'pulsera macrame', 10, 500, 'macrame', "../img/card5.png")
  
  const productoF = new Producto(6, 'centro de mesa', 10, 2500, 'mimbre', "../img/card6.png")
  
  const productoG = new Producto(7, 'cuadro naturaleza', 10, 4700, 'cuadro', "../img/card7.png")
  
  const listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG]
  
  let tarjetas = document.querySelector ('.tarjetas')

  const botonVaciar = document.querySelector('.btnVaciar');

  let boton1 = document.querySelector('.btn1');

  boton1.addEventListener('click', menorPrecio)

  function menorPrecio(){

    const menorPrecio = listaProductos.filter(producto => producto.precio <= 1500);
     
    tarjetas.innerHTML= ''

    for (const producto of menorPrecio) {
      let contenedor = document.createElement("div");
      
      contenedor.innerHTML = `
        <img class="gallery__img" src="${producto.img}"/>
        <h3>${producto.nombre}</h3>
        <b>$${producto.precio}</b>
        <p>Stock: ${producto.stock} unidades</p>
        <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" class="btn" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                          `
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
      
      contenedor.innerHTML = `
        <img class="gallery__img" src="${producto.img}"/>
        <h3>${producto.nombre}</h3>
        <b>$${producto.precio}</b>
        <p>Stock: ${producto.stock} unidades</p>
        <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" class="btn" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                          `
  
  
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
      
      contenedor.innerHTML = `
        <img class="gallery__img" src="${producto.img}"/>
        <h3>${producto.nombre}</h3>
        <b>$${producto.precio}</b>
        <p>Stock: ${producto.stock} unidades</p>
        <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" class="btn" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                          `
  
  
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
      
      contenedor.innerHTML = `
        <img class="gallery__img" src="${producto.img}"/>
        <h3>${producto.nombre}</h3>
        <b>$${producto.precio}</b>
        <p>Stock: ${producto.stock} unidades</p>
        <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" class="btn" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                          `
  
  
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
      
      contenedor.innerHTML = `
        <img class="gallery__img" src="${producto.img}"/>
        <h3>${producto.nombre}</h3>
        <b>$${producto.precio}</b>
        <p>Stock: ${producto.stock} unidades</p>
        <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" class="btn" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                          `
  
  
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
      
      contenedor.innerHTML = `
        <img class="gallery__img" src="${producto.img}"/>
        <h3>${producto.nombre}</h3>
        <b>$${producto.precio}</b>
        <p>Stock: ${producto.stock} unidades</p>
        <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" class="btn" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                          `
  
  
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
      
      contenedor.innerHTML = `
        <img class="gallery__img" src="${producto.img}"/>
        <h3>${producto.nombre}</h3>
        <b>$${producto.precio}</b>
        <p>Stock: ${producto.stock} unidades</p>
        <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" class="btn" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                          `
  
  
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
      
      contenedor.innerHTML = `
        <img class="gallery__img" src="${producto.img}"/>
        <h3>${producto.nombre}</h3>
        <b>$${producto.precio}</b>
        <p>Stock: ${producto.stock} unidades</p>
        <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" class="btn" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                          `
  
  
      tarjetas.appendChild(contenedor);
     
    }
  }
  
  
  let cantidadComprada = 0;
  let precioTotalVenta = 0;
  
  
  const carrito = [];
  
  function mostrarProductos() {
    let catalogo = document.querySelector(".tarjetas");
    catalogo.innerHTML = "";
  
    for (const producto of listaProductos) {
      let contenedor = document.createElement("div");
  
      
      contenedor.innerHTML = `
        <img class="gallery__img" src="${producto.img}"/>
        <h3>${producto.nombre}</h3>
        <b>$${producto.precio}</b>
        <p>Stock: ${producto.stock} unidades</p>
        <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" class="btn" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                          `


      ;
      
      catalogo.appendChild(contenedor);
    }
  }
  
  function addToCart(precio, id, stock) {
    for (Producto of listaProductos) {
      if (Producto.id === id) {
        if (stock > 0) {
          carrito.push(precio);
          Producto.venta(1);
  
          precioTotalVenta = carrito.reduce((partialSum, a) => partialSum + a, 0);
          saveInLocalStorage();
          vistaTotal();
          mostrarProductos();
        } else {
          faltaStock(Producto);
        }
      }
    }
  }
  
  function saveInLocalStorage() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
      total = total + carrito[i];
    }
  
    JSON.stringify(total); 
    localStorage.setItem("precio_carrito", total); 
  }
  
  function faltaStock(Producto) {
    console.log("No nos queda de eso ):");
    let inputPrecio = document.querySelector(".total-2");
    inputPrecio.innerHTML = "";
  
    let contenedor = document.createElement("div");
  
    contenedor.innerHTML = `<div class="elTotal-2"">
                              <b>No tenemos stock suficiente de ${Producto.nombre}</b>`;
    inputPrecio.appendChild(contenedor);
  }
  
  
  function vistaTotal() {
    
    let totalDelStorage = localStorage.getItem("precio_carrito");
    totalDelStorage = parseInt(totalDelStorage); //no uso el JSON.parse porque es para objetos. parseo de string a int
    console.log(totalDelStorage); //vale igual que precioTotalVenta
  
    let inputPrecio = document.querySelector(".total");
    inputPrecio.innerHTML = "";
  
    let contenedor = document.createElement("div");
  
    contenedor.innerHTML = `<div class="elTotal"">
                              <b>El total de su compra es de: $${precioTotalVenta}</b>`;
    inputPrecio.appendChild(contenedor);
  }
  
  mostrarProductos();
  vistaTotal();
  vaciarCarrito();
  
  console.log(carrito);


  botonVaciar.addEventListener('click', vaciarCarrito);

  function vaciarCarrito() {
    // Limpiamos los productos guardados
    const carrito = [];
    // Renderizamos los cambios
   
    // Borra LocalStorage
    localStorage.clear();
  }
  


  
  
 
