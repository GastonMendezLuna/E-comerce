$("#menuHamburguesa").click(function () {
  $(".menuResponsive").toggle(370).addclass(".mostrar");
});

let cantidadComprada = 0;
let precioTotalVenta = 0;
let listaProductos = [];
let tarjetas = document.querySelector(".tarjetas");

class Producto {
  constructor(id, nombre, stock, precio, categoria, img) {
    this.id = id;
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.categoria = categoria;
    this.img = img;

    this.venta = function (cantidadComprada) {
      this.stock -= cantidadComprada;
      console.log("Se vendieron" + cantidadComprada + " " + " " + this.nombre);
    };
    this.faltaStock = function (cantidadComprada) {
      this.stock < cantidadComprada;
      alert("No tenemos mas unidades, tenemos hasta 10 " + this.nombre);
    };
  }
}

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((producto) =>
      listaProductos.push(
        new Producto(
          producto.id,
          producto.nombre,
          producto.stock,
          producto.precio,
          producto.categoria,
          producto.img
        )
      )
    );
    mostrarProductos();
    console.log(listaProductos);
  });

let boton1 = document.querySelector(".btn1");

boton1.addEventListener("click", menorPrecio);

function menorPrecio() {
  const menorPrecio = listaProductos.filter(
    (producto) => producto.precio <= 1500
  );

  tarjetas.innerHTML = "";

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
                          `;
    tarjetas.appendChild(contenedor);
  }
}

let boton2 = document.querySelector(".btn2");

boton2.addEventListener("click", precioMedio);

function precioMedio() {
  const precioMedio = listaProductos.filter(
    (producto) => producto.precio <= 4000
  );

  tarjetas.innerHTML = "";

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
                          `;

    tarjetas.appendChild(contenedor);
  }
}

let boton3 = document.querySelector(".btn3");

boton3.addEventListener("click", mayorPrecio);

function mayorPrecio() {
  const mayorPrecio = listaProductos.filter(
    (producto) => producto.precio >= 4001
  );

  tarjetas.innerHTML = "";

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
                          `;

    tarjetas.appendChild(contenedor);
  }
}

let boton4 = document.querySelector(".btn4");

boton4.addEventListener("click", categoriaMimbre);

function categoriaMimbre() {
  const categoriaMimbre = listaProductos.filter(
    (producto) => producto.categoria == "mimbre"
  );

  tarjetas.innerHTML = "";

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
                          `;

    tarjetas.appendChild(contenedor);
  }
}

let boton5 = document.querySelector(".btn5");

boton5.addEventListener("click", categoriaTejido);

function categoriaTejido() {
  const categoriaTejido = listaProductos.filter(
    (producto) => producto.categoria == "tejido"
  );

  tarjetas.innerHTML = "";

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
                          `;

    tarjetas.appendChild(contenedor);
  }
}

let boton6 = document.querySelector(".btn6");

boton6.addEventListener("click", categoriaMacrame);

function categoriaMacrame() {
  const categoriaMacrame = listaProductos.filter(
    (producto) => producto.categoria == "macrame"
  );

  tarjetas.innerHTML = "";

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
                          `;

    tarjetas.appendChild(contenedor);
  }
}

let boton7 = document.querySelector(".btn7");

boton7.addEventListener("click", categoriaCuadro);

function categoriaCuadro() {
  const categoriaCuadro = listaProductos.filter(
    (producto) => producto.categoria == "cuadro"
  );

  tarjetas.innerHTML = "";

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
                          `;

    tarjetas.appendChild(contenedor);
  }
}

let boton8 = document.querySelector(".btn8");

boton8.addEventListener("click", renderProductos);

function renderProductos() {
  const renderProductos = listaProductos.filter(
    (producto) => producto.precio >= 1
  );

  tarjetas.innerHTML = "";

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
                          `;

    tarjetas.appendChild(contenedor);
  }
}

let carrito = [];

function mostrarProductos() {
  let catalogo = document.querySelector(".tarjetas");
  catalogo.innerHTML = "";

  for (const producto of listaProductos) {
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

    // voy a utilizar esto de abajo a futuro
    // contenedor.onclick = () => addToCart(producto);
    catalogo.appendChild(contenedor);
  }
  vaciarCarrito();
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
        textos("Agregaste '" + Producto.nombre + "' al carro");
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
  Swal.fire({
    icon: "error",
    title: "Lo sentimos!",
    text: "No tenemos mas stock del producto seleccionado",
    footer:
      '<a href="https://shortest.link/2SXx">Además hacemos diseños a pedido, escribinos a nuestro Whatsapp</a>',
  });
}

let totalDelStorage = localStorage.getItem("precio_carrito");
let inputPrecio = document.querySelector(".total");
function vistaTotal() {
  totalDelStorage = parseInt(totalDelStorage);
  if (isNaN(totalDelStorage)) {
    totalDelStorage = 0;
  }
  console.log(totalDelStorage);

  inputPrecio.innerHTML = "";

  let contenedor = document.createElement("div");

  contenedor.innerHTML = `<div class="elTotal"">
                              <b>El total de su compra es de: $${precioTotalVenta}</b>`;
  inputPrecio.appendChild(contenedor);
}

function clearStorage() {
  console.log("Storage vaciado");
  localStorage.clear();
  carrito = [];
  precioTotalVenta = 0;
  vistaTotal();
  textos("Vaciaste el carro!");
}

function vaciarCarrito() {
  const botonVaciar = document.querySelector(".btnVaciar");
  botonVaciar.addEventListener("click", clearStorage);
}

function textos(text) {
  Toastify({
    text,
    duration: 3000,
    position: "center",
    style: {
      background: "linear-gradient(to right, #000000, #000000)",
    },
  }).showToast();
}

const botonFinalizar = document.querySelector(".btnFinalizar");
botonFinalizar.addEventListener("click", finalizarCompra);

function finalizarCompra() {
  Swal.fire({
    title: "Muchas gracias!",
    text:
      "Tu compra ha sido realizada con éxito, muchas gracias por confiar en nosotros! El total de su compra es de $" +
      precioTotalVenta +
      " pesos. Namaste",
    imageUrl: "../img/Alma gesell.gif",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "logo pagina",
  });
  clearStorage();
}

mostrarProductos();
vistaTotal();
