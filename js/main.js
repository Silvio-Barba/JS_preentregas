const ListadeCafes = [
  {
    id: "superCrema",
    nombre: "Super Crema",
    origen: "Argentina",
    sabor: "Balanceado",
    acidez: "Media",
    cuerpo: "Medio",
    peso: 250,
    cantidad: 1,
    precio: 1850,
  },
  {
    id: "ColombiaGuanes",
    nombre: "Colombia Guanes",
    origen: "Colombia",
    sabor: "Suave",
    acidez: "Media",
    cuerpo: "Medio",
    peso: 250,
    cantidad: 1,
    precio: 2000,
  },
  {
    id: "DeLaCasa",
    nombre: "Blend de la casa",
    origen: "Brasil, Colombia",
    sabor: "Balanceado",
    acidez: "Baja",
    cuerpo: "Pleno",
    peso: 250,
    cantidad: 1,
    precio: 1800,
  },
  {
    id: "colombiaExcelso",
    nombre: "Colombia Excelso",
    origen: "Colombia",
    sabor: "Suave",
    acidez: "Baja",
    cuerpo: "Ligero",
    peso: 250,
    cantidad: 1,
    precio: 1950,
  },
  {
    id: "SantosBourbon",
    nombre: "Santos Bourbon",
    origen: "Brasil",
    sabor: "Intenso",
    acidez: "Media",
    cuerpo: "Pleno",
    peso: 250,
    cantidad: 1,
    precio: 1650,
  },
  {
    id: "HondurasOrganico",
    nombre: "Honduras Orgánico",
    origen: "Honduras",
    sabor: "Suave, dulce",
    acidez: "Tartárica",
    cuerpo: "Pleno",
    peso: 250,
    cantidad: 1,
    precio: 2600,
  },
];

const listarCafes = document.querySelector(".contenedorCafe");
const secciones = document.querySelectorAll(".seccion");

function mostrarCafes(cafesElegidos) {
  listarCafes.innerHTML = "";

  cafesElegidos.forEach((cafe) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <div class="container-cards card border-dark mb-3" style="max-width: 20rem;">
    <div class="card-header">${cafe.nombre}</div>
    <div class="card-body">
        <p class="card-text">
        <p>Origen: ${cafe.origen}</p>
        <p>Sabor: ${cafe.sabor}</p>
        <p>Acidez: ${cafe.acidez}</p>
        <p>Cuerpo: ${cafe.cuerpo}</p>
        <p>Peso: ${cafe.peso} gr.</p>
        <p>Precio: $ ${cafe.precio}</p>
        </p>
        <button type="button" id="${cafe.id}" class="agregar btn btn-dark">Agregar al carrito</button>
    </div>
    `;
    listarCafes.appendChild(div);
  });
}

mostrarCafes(ListadeCafes);

secciones.forEach((seccion) => {
  seccion.addEventListener("click", (e) => {
    e.preventDefault();
    const origenSeleccionado = e.currentTarget.id;
    let cafesFiltrados;

    if (origenSeleccionado === "all") {
      cafesFiltrados = ListadeCafes;
    } else {
      cafesFiltrados = ListadeCafes.filter(
        (cafe) => cafe.origen.toLowerCase() === origenSeleccionado.toLowerCase()
      );
    }

    mostrarCafes(cafesFiltrados);

    cafesFiltrados.forEach((cafe, index) => {
      const botonAgregar = document.getElementById(cafe.id);
      botonAgregar.addEventListener("click", () => {
        agregarProducto(cafesFiltrados[index]);
      });
    });
  });
});

const carritox = [];
const carritoDiv = document.querySelector("#tu_compra");
const precioTotalDiv = document.querySelector("#precio-total");

document.querySelectorAll(".agregar").forEach((button, index) => {
  button.addEventListener("click", () => {
    agregarProducto(ListadeCafes[index]);
  });
});

function agregarProducto(producto) {
  const index = carritox.findIndex((p) => p.id === producto.id);
  if (index !== -1) {
    carritox[index].cantidad += 1;
  } else {
    producto.cantidad = 1;
    carritox.push(producto);
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  carritoDiv.innerHTML = "";
  precioTotal = 0;
  carritox.forEach((cafe) => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");
    productoDiv.innerHTML = `
        <h3> ${cafe.nombre}</h3>
        <p>Cantidad: ${cafe.cantidad}</p>
        <p>Peso: ${cafe.peso * cafe.cantidad} gr.</p>
        <p>Precio: $ ${cafe.precio * cafe.cantidad}</p>
        <button type="button" class="eliminar-producto btn btn-dark">Eliminar</button>
      `;
    carritoDiv.appendChild(productoDiv);
    precioTotal += cafe.precio * cafe.cantidad;
  });
  precioTotalDiv.innerHTML = `Total de su compra: $${precioTotal}`;

  /* ELIMINO PRODUCTOS DEL CARRITO */

  document.querySelectorAll(".eliminar-producto").forEach((button, index) => {
    button.addEventListener("click", () => {
      eliminarProducto(index);
    });
  });
}

function eliminarProducto(index) {
  const producto = carritox[index];
  precioTotal -= producto.precio;

  if (producto.cantidad > 1) {
    producto.cantidad--;
  } else {
    carritox.splice(index, 1);
  }

  actualizarCarrito();
}

/* VACIO CARRITO COMPLETO */

function vaciarCarrito() {
  carritox.length = 0;
  actualizarCarrito();
  document.getElementById("tu_compra").innerHTML = "";
  document.getElementById("precio-total").innerHTML = "";
}

document.getElementById("vaciar").addEventListener("click", vaciarCarrito);
