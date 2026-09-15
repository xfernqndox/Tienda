// ============================================================
//  DETALLE DE PRODUCTO (producto.html)
//  Lee el id desde la URL: producto.html?id=3
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const producto = buscarProducto(id);
  const contenedor = document.getElementById("detalle-producto");

  if (!producto) {
    contenedor.innerHTML =
      '<div class="alert alert-danger">Producto no encontrado. ' +
      '<a href="index.html">Volver al catálogo</a>.</div>';
    return;
  }

  document.title = producto.nombre + " - Impacta";

  const enOferta = producto.precioOferta != null;

  // Bloque de precio
  let htmlPrecio;
  if (enOferta) {
    const descuento = Math.round(
      (1 - producto.precioOferta / producto.precio) * 100
    );
    htmlPrecio =
      '<p class="fs-5 text-muted text-decoration-line-through mb-0">' +
      formatearPrecio(producto.precio) +
      "</p>" +
      '<p class="fs-2 fw-bold text-danger">' +
      formatearPrecio(producto.precioOferta) +
      '<span class="badge bg-danger ms-2 align-middle">-' +
      descuento +
      "%</span></p>";
  } else {
    htmlPrecio =
      '<p class="fs-2 fw-bold">' + formatearPrecio(producto.precio) + "</p>";
  }

  // Tabla de especificaciones
  let filasEspecificaciones = "";
  for (const clave in producto.especificaciones) {
    filasEspecificaciones +=
      "<tr><th scope=\"row\" class=\"w-25\">" +
      clave +
      "</th><td>" +
      producto.especificaciones[clave] +
      "</td></tr>";
  }

  contenedor.innerHTML =
    '<div class="row g-4">' +
    '  <div class="col-md-5">' +
    '    <img src="' +
    producto.imagen +
    '" class="img-fluid border rounded p-3" alt="' +
    producto.nombre +
    '" onerror="imagenNoDisponible(this)">' +
    "  </div>" +
    '  <div class="col-md-7">' +
    '    <span class="badge bg-secondary mb-2">' +
    producto.categoria +
    "</span>" +
    "    <h2>" +
    producto.nombre +
    "</h2>" +
    '    <p class="text-muted">' +
    producto.descripcion +
    "</p>" +
    htmlPrecio +
    '    <div class="d-flex align-items-center gap-2 mb-3">' +
    '      <label for="cantidad" class="form-label mb-0">Cantidad:</label>' +
    '      <input type="number" id="cantidad" class="form-control" style="width:90px" value="1" min="1">' +
    "    </div>" +
    '    <button id="btn-agregar" class="btn btn-primary btn-lg">Agregar al carrito</button>' +
    '    <a href="index.html" class="btn btn-link">Seguir comprando</a>' +
    "  </div>" +
    "</div>" +
    '<h4 class="mt-5">Especificaciones técnicas</h4>' +
    '<table class="table table-striped table-bordered">' +
    "<tbody>" +
    filasEspecificaciones +
    "</tbody></table>";

  // Botón agregar al carrito
  document.getElementById("btn-agregar").addEventListener("click", function () {
    const cantidad = parseInt(document.getElementById("cantidad").value, 10) || 1;
    agregarAlCarrito(producto.id, cantidad);
    mostrarAviso("Se agregaron " + cantidad + " unidad(es) al carrito.");
  });
});

// Aviso temporal (toast simple)
function mostrarAviso(mensaje) {
  const aviso = document.getElementById("aviso");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
  setTimeout(function () {
    aviso.classList.add("d-none");
  }, 2500);
}
