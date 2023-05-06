let totalcompra = 0

const superCrema = {
    Nombre: "Super Crema",
    Origen: "Argentina",
    Sabor: "Balanceado",
    Acidez: "Media",
    Cuerpo: "Medio",
    Cantidad: 250,
    Precio: 1850,
}
const colombiaGuanes = {
    Nombre: "Colombia Guanes",
    Origen: "Colombia",
    Sabor: "Suave",
    Acidez: "Media",
    Cuerpo: "Medio",
    Cantidad: 250,
    Precio: 2000,
}
const deLaCasa = {
    Nombre: "Blend de la casa",
    Origen: "Brasil, Colombia",
    Sabor: "Balanceado",
    Acidez: "Baja",
    Cuerpo: "Pleno",
    Cantidad: 250,
    Precio: 1800,
}
const colombiaExcelso = {
    Nombre: "Colombia Excelso",
    Origen: "Colombia",
    Sabor: "Suave",
    Acidez: "Baja",
    Cuerpo: "Ligero",
    Cantidad: 250,
    Precio: 1950,
}
const santosBourbon = {
    Nombre: "Santos Bourbon",
    Origen: "Brasil",
    Sabor: "Intenso",
    Acidez: "Media",
    Cuerpo: "Pleno",
    Cantidad: 250,
    Precio: 1650,
}
const hondurasOrganico = {
    Nombre: "Honduras Orgánico",
    Origen: "Honduras",
    Sabor: "Suave, dulce",
    Acidez: "Tartárica",
    Cuerpo: "Pleno",
    Cantidad: 250,
    Precio: 2600,
}
const tiposDeCafe = [superCrema, colombiaGuanes, deLaCasa, colombiaExcelso, santosBourbon, hondurasOrganico]


const textoBusqueda = document.getElementById('busqueda');
const searchButton = document.getElementById('botonBuscar');
const resultadosBusqueda = document.getElementById('resultado');




searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    const textoBusquedaTolowercase = textoBusqueda.value.toLowerCase();
    const results = [];
  
    for (let i = 0; i < tiposDeCafe.length; i++) {
      const cafe = tiposDeCafe[i];
      const properties = Object.values(cafe);
      for (let j = 0; j < properties.length; j++) {
        const property = properties[j].toString().toLowerCase();
        if (property.indexOf(textoBusquedaTolowercase) !== -1) {
          results.push(cafe);
          break;
        }
      }
    }
  
    if (results.length === 0 || textoBusqueda.value === '' || textoBusqueda.value === ' ') {
        resultadosBusqueda.innerHTML = ` Disculpá, pero "${textoBusquedaTolowercase}" no es un cafe.`;
    } else {
        resultadosBusqueda.innerHTML = '';
      for (let i = 0; i < results.length; i++) {
        const cafe = results[i];
        const cafeInfo = `
        <div class="container-cards card border-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">${cafe.Nombre}</div>
        <div class="card-body">
            <p class="card-text">
            <p>Origen: ${cafe.Origen}</p>
            <p>Sabor: ${cafe.Sabor}</p>
            <p>Acidez: ${cafe.Acidez}</p>
            <p>Cuerpo: ${cafe.Cuerpo}</p>
            <p>Cantidad: ${cafe.Cantidad} gr.</p>
            <p>Precio: $ ${cafe.Precio}</p>
            </p>
            <button type="button" class="agregar btn btn-dark">Agregar al carrito</button>
        </div>
    </div>
        `;
        resultadosBusqueda.innerHTML += cafeInfo;

        document.querySelector(".contenedorCafe").innerHTML = '';
        document.querySelector(".contenedorCafe").appendChild(resultadosBusqueda)
      }
    }
  });

  




/* filtros */

let result = tiposDeCafe.filter ((producto)=> producto.Precio >= 2500);

let filtroBrasil = tiposDeCafe.filter ((producto)=> producto.Origen === "Brasil" || producto.Origen === "Brasil, Colombia");

let filtroColombia = tiposDeCafe.filter ((producto)=> producto.Origen === "Colombia" || producto.Origen === "Brasil, Colombia");

/* console.log(filtroColombia)
 */
/* Buscador */

const buscardelacasa = tiposDeCafe.find ((producto)=> producto.Nombre === "Blend de la casa")
const buscaracidez = tiposDeCafe.find ((producto)=> producto.Acidez === "Baja")

    let precioTotal = 0;

    for (let cafe of tiposDeCafe){
        let contenedor = document.createElement ("div")
        contenedor.innerHTML =
        `
        <div class="container-cards card border-dark mb-3" style="max-width: 20rem;">
            <div class="card-header">${cafe.Nombre}</div>
            <div class="card-body">
                <p class="card-text">
                <p>Origen: ${cafe.Origen}</p>
                <p>Sabor: ${cafe.Sabor}</p>
                <p>Acidez: ${cafe.Acidez}</p>
                <p>Cuerpo: ${cafe.Cuerpo}</p>
                <p>Cantidad: ${cafe.Cantidad} gr.</p>
                <p>Precio: $ ${cafe.Precio}</p>
                </p>
                <button type="button" class="agregar btn btn-dark">Agregar al carrito</button>
            </div>
        </div>
        
        `
    
        document.querySelector(".contenedorCafe").appendChild(contenedor)
    
    }
    
    const carritox = []
    
    const carritoDiv = document.querySelector("#tu_compra");
    const precioTotalDiv = document.querySelector("#precio-total");
    
    document.querySelectorAll('.agregar').forEach((button, index)=> {
        button.addEventListener ('click',()=> {
            agregarProducto(tiposDeCafe[index]);
        })
    });
    
    function agregarProducto(producto) {
        carritox.push(producto);
        actualizarCarrito();
    }
    
    function actualizarCarrito(){
        carritoDiv.innerHTML = '';
        precioTotal = 0;
        carritox.forEach(producto => {
            const productoDiv = document.createElement ('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
            <h3> ${producto.Nombre}</h3>
            <p>Cantidad: ${producto.Cantidad} gr.</p>
            <p>Precio: $ ${producto.Precio}</p>
            <button type="button" class="eliminar-producto btn btn-dark">Eliminar</button>
            `;
            carritoDiv.appendChild(productoDiv);
            precioTotal += producto.Precio;
        });
        precioTotalDiv.innerHTML = `Total de su compra: $${precioTotal}`;
    
/* ELIMINO PRODUCTOS DEL CARRITO */

        document.querySelectorAll('.eliminar-producto').forEach((button, index) => {
            button.addEventListener('click', () => {
                eliminarProducto(index);
            });
        });
    }
    
    function eliminarProducto(index) {
        const producto = carritox[index];
        precioTotal -= producto.Precio;
        carritox.splice(index, 1);
        actualizarCarrito();
    }
    
    /* VACIO CARRITO COMPLETO */

    document.getElementById('vaciar').addEventListener('click', function() {
      carritox.splice(0, carritox.length);
      document.getElementById('tu_compra').innerHTML = '';
      document.getElementById('precio-total').innerHTML = '';
    });
 











/* 




    let vaciar = document.getElementById("#vaciar");
    vaciar.addEventListener('click', () => {
      vaciarCarrito();
    });
    
    function vaciarCarrito() {
      carritox.length = 0;
    }


 */
