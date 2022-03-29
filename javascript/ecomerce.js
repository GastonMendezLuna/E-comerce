$("#menuHamburguesa").click(function () {
    $(".menuResponsive").toggle(330).addclass(".mostrar");
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
    console.log( 'Se vendieron '+ cantidadComprada + ' ' + ' ' + this.nombre)
    }
    this.faltaStock = function(cantidadComprada){
    this.stock < cantidadComprada
    alert('No tenemos mas unidades, tenemos hasta 10 '  + this.nombre)
    }
    
    }
  }
    

    const listaProductosB = [];

  fetch('../data.json')
  .then((resp) => resp.json())
  .then((data) => data.forEach((producto) => listaProductosB.push(new Producto(producto.id, producto.nombre, producto.stock, producto.precio, producto.categoria, producto.img))))

  
console.log(listaProductosB)
  


    
    let tarjetas = document.querySelector ('.tarjetas')
  
    const botonVaciar = document.querySelector('.btnVaciar');
  
    let boton1 = document.querySelector('.btn1');
  
    boton1.addEventListener('click', menorPrecio)
  
    function menorPrecio(){
  
      const menorPrecio = listaProductosB.filter(producto => producto.precio <= 1500);
       
      tarjetas.innerHTML= ''
  
      for (const producto of menorPrecio) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `
            <div class="card">
              <img class="imagen" src="${producto.img}"/>
              <div class="encuadrarTexto">
              <h3>${producto.nombre}</h3>
              <b>$${producto.precio}</b>
              <p>Stock: ${producto.stock} unidades</p>
              <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                      </div>
            </div>
                            `
        tarjetas.appendChild(contenedor);
        
        let compra1 = document.getElementById('#producto.1')
        
       
      }
      
    }
    
    let boton2 = document.querySelector('.btn2')
  
    boton2.addEventListener('click', precioMedio)
  
    function precioMedio(){
  
      const precioMedio = listaProductosB.filter(producto => producto.precio <= 4000);
      
      tarjetas.innerHTML= ''
  
      for (const producto of precioMedio) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `
            <div class="card">
              <img class="imagen" src="${producto.img}"/>
              <div class="encuadrarTexto">
              <h3>${producto.nombre}</h3>
              <b>$${producto.precio}</b>
              <p>Stock: ${producto.stock} unidades</p>
              <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                      </div>
            </div>
                            `
    
    
        tarjetas.appendChild(contenedor);
       
      }
    }
    
    let boton3 = document.querySelector('.btn3')
  
    boton3.addEventListener('click', mayorPrecio)
  
    function mayorPrecio(){
  
      const mayorPrecio = listaProductosB.filter(producto => producto.precio >= 4001);
  
      tarjetas.innerHTML= ''
  
      for (const producto of mayorPrecio) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `
            <div class="card">
              <img class="imagen" src="${producto.img}"/>
              <div class="encuadrarTexto">
              <h3>${producto.nombre}</h3>
              <b>$${producto.precio}</b>
              <p>Stock: ${producto.stock} unidades</p>
              <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                      </div>
            </div>
                            `
    
    
        tarjetas.appendChild(contenedor);
       
      }
    }
    
    
    let boton4 = document.querySelector('.btn4')
  
    boton4.addEventListener('click', categoriaMimbre)
  
    function categoriaMimbre(){
  
      const categoriaMimbre = listaProductosB.filter(producto => producto.categoria == 'mimbre');
  
      tarjetas.innerHTML= ''
      
      for (const producto of categoriaMimbre) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `
            <div class="card">
              <img class="imagen" src="${producto.img}"/>
              <div class="encuadrarTexto">
              <h3>${producto.nombre}</h3>
              <b>$${producto.precio}</b>
              <p>Stock: ${producto.stock} unidades</p>
              <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                      </div>
            </div>
                            `
    
    
        tarjetas.appendChild(contenedor);
       
      }
    }
    
    let boton5 = document.querySelector('.btn5')
  
    boton5.addEventListener('click', categoriaTejido)
  
    function categoriaTejido(){
      const categoriaTejido = listaProductosB.filter(producto => producto.categoria == 'tejido');
  
      tarjetas.innerHTML= ''
  
      for (const producto of categoriaTejido) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `
            <div class="card">
              <img class="imagen" src="${producto.img}"/>
              <div class="encuadrarTexto">
              <h3>${producto.nombre}</h3>
              <b>$${producto.precio}</b>
              <p>Stock: ${producto.stock} unidades</p>
              <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                      </div>
            </div>
                            `
    
    
        tarjetas.appendChild(contenedor);
       
      }
    }
    
    let boton6 = document.querySelector('.btn6')
  
    boton6.addEventListener('click', categoriaMacrame)
  
    function categoriaMacrame(){
      const categoriaMacrame = listaProductosB.filter(producto => producto.categoria == 'macrame');
  
      tarjetas.innerHTML= ''
      
      for (const producto of categoriaMacrame) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `
            <div class="card">
              <img class="imagen" src="${producto.img}"/>
              <div class="encuadrarTexto">
              <h3>${producto.nombre}</h3>
              <b>$${producto.precio}</b>
              <p>Stock: ${producto.stock} unidades</p>
              <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                      </div>
            </div>
                            `
    
    
        tarjetas.appendChild(contenedor);
       
      }
    }
    
    let boton7 = document.querySelector('.btn7')
  
    boton7.addEventListener('click', categoriaCuadro)
  
    function categoriaCuadro(){
      const categoriaCuadro = listaProductosB.filter(producto => producto.categoria == 'cuadro');
  
      tarjetas.innerHTML= ''
      
      for (const producto of categoriaCuadro) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `
            <div class="card">
              <img class="imagen" src="${producto.img}"/>
              <div class="encuadrarTexto">
              <h3>${producto.nombre}</h3>
              <b>$${producto.precio}</b>
              <p>Stock: ${producto.stock} unidades</p>
              <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                      </div>
            </div>
                            `
    
    
        tarjetas.appendChild(contenedor);
       
      }
    }
    
    let boton8 = document.querySelector('.btn8')
  
    boton8.addEventListener('click', renderProductos)
  
    function renderProductos(){
      const renderProductos = listaProductosB.filter(producto => producto.precio >= 1);
  
      tarjetas.innerHTML= ''
  
      for (const producto of renderProductos) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `
            <div class="card">
              <img class="imagen" src="${producto.img}"/>
              <div class="encuadrarTexto">
              <h3>${producto.nombre}</h3>
              <b>$${producto.precio}</b>
              <p>Stock: ${producto.stock} unidades</p>
              <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                      </div>
            </div>
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
    
      for (const producto of listaProductosB) {
        let contenedor = document.createElement("div");
    
        
        contenedor.innerHTML = `
              <div class="card">
              <img class="imagen" src="${producto.img}"/>
              <div class="encuadrarTexto">
              <h3>${producto.nombre}</h3>
              <b>$${producto.precio}</b>
              <p>Stock: ${producto.stock} unidades</p>
              <div id="buttons"><button  id="btn" class="botonTarjeta" id="boton${producto.id}" onclick="addToCart(${producto.precio},${producto.id},${producto.stock})"><span>Comprame!</span></button></div>
                      </div>
            </div>
                            `;
        
        catalogo.appendChild(contenedor);
        
      }
    }
    
    function addToCart(precio, id, stock) {
      for (Producto of listaProductosB) {
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No tenemos mas stock del producto seleccionado',
        footer: '<a href="https://shortest.link/2SXx">Además hacemos diseños a pedido, escribinos a nuestro Whatsapp</a>'
      })
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
    
   
  
  
    botonVaciar.addEventListener('click', vaciarCarrito);
  
    function vaciarCarrito() {
        
      // Limpiamos los productos guardados
      const carrito = [];
      // Renderizamos los cambios
     
      // Borra LocalStorage
      localStorage.clear();
      
    }

    const botonFinalizar = document.querySelector('.btnFinalizar');
    botonFinalizar.addEventListener('click', finalizarCompra);

    function finalizarCompra(){
        Swal.fire({
        title: 'Gracias!',
        text: 'Tu compra ha sido realizada con éxito, muchas gracias por confiar en nosotros! El total de su compra es de $' + precioTotalVenta + ' pesos.',
        imageUrl: '../img/Alma gesell.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'logo pagina',
      })
    }
 