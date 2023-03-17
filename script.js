

import menu from "./componentes/menu.js";
import loader from "./componentes/loader.js";
import carrito from "./componentes/mostrarCarrito.js";
import obtenerDatos from "./componentes/recurso/obtenerdatos.js";
import products from "./componentes/printProducts.js";
import cart from "./componentes/carrito.js";
import filtrar from "./componentes/list.js";
import darkModeToggle from "./componentes/darkmode.js";



loader()
carrito()
menu ()
let {db,printProducts} = products (await obtenerDatos())
cart(db,printProducts)
filtrar(printProducts)


// console.log(printProducts( await obtenerDatos()))
// let loader = document.querySelector(`.loader`);
// let loaderText = document.querySelector(`.loader_text`);
// let loaderCircle = document.querySelector(`.loader_circle`);
// window.addEventListener("load", function () {
//   loader.classList.add(`loader_hiden`);
// });

// const botonMenu = document.getElementById(`boton_menu`);
// const menu = document.querySelector(`.menu`);
// botonMenu.addEventListener(`click`, () => {
//   menu.classList.toggle(`menu_active`);
// });

// async function obtenerDatos() {
//   let productos;
//   try {
//     const response = await fetch(
//       "https://ecommercebackend.fundamentos-29.repl.co/"
//     );
//     const data = await response.json();
//     productos = data;
//   } catch (error) {
//     console.error(error);
//   }
//   return productos;
// }
// // Llamar a la función obtenerDatos y esperar a que se resuelva la promesa
// obtenerDatos().then((productos) => {
//   const contenedorProductos = document.getElementById(`contenedorProductos`);
//   let codigo = ``;
//   for (let product in productos) {
//     let datos = productos[product];
//     let id = datos[`id`];
//     let nombre = datos[`name`];
//     let precio = datos[`price`];
//     let stock = datos[`quantity`];
//     let imagen = datos[`image`];
//     let description = datos[`description`];
//     codigo += `<article class="producto_card">
//         <div class="producto_img">
//         <img src="${imagen}" alt="producto ${id}" title="${description}" loading="lazy">
//         </div>
//         <div class="producto_contenido">
//           <span class="price">$ ${precio}</span>
//           <span class="stok">Disponibles: ${stock}</span>
//           <button type="button" class="boton_carrito">
//           <i class="fa-solid fa-cart-shopping"></i>
//           </button>
//         <h3 class="name">${nombre}</h3>
//         </div>
//       </article>`;
//   }
//   contenedorProductos.innerHTML = codigo;
// });
