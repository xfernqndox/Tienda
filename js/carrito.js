// ============================================================
//  CARRITO DE COMPRAS (carrito.html)
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  renderizarCarrito();

  document.getElementById("btn-vaciar").addEventListener("click", function () {
    if (confirm("¿Seguro que deseas vaciar el carrito?")) {
      vaciarCarrito();
      renderizarCarrito();
    }
  });

  document.getElementById("btn-comprar").addEventListener("click", function () {
    if (obtenerCarrito().length === 0) return;

    if (!obtenerSesion()) {
      alert("Debes iniciar sesión para finalizar la compra.");
      window.location.href = "login.html";
      return;
    }

    Swal.fire({
      title: "¡Compra realizada con éxito!",
      text: "Total pagado: " + formatearPrecio(totalCarrito()),
      icon: "success"
    });

    vaciarCarrito();
    renderizarCarrito();
  });
});

function renderizarCarrito() {
  const carrito = obtenerCarrito();
  const contenedor = document.getElementById("contenido-carrito");
  const resumen = document.getElementById("resumen-carrito");

  if (carrito.length === 0) {
    contenedor.innerHTML =
      '<div class="alert alert-info">Tu carrito está vacío. ' +
      '<a href="index.html">Ir al catálogo</a>.</div>';
    resumen.classList.add("d-none");
    return;
  }

  resumen.classList.remove("d-none");

  let filas = "";
  carrito.forEach(function (item) {
    const p = buscarProducto(item.id);
    if (!p) return;
    const precio = precioFinal(p);
    const subtotal = precio * item.cantidad;

    filas +=
      "<tr>" +
      '<td style="width:80px">' +
      '<img src="' +
      p.imagen +
      '" class="img-fluid" alt="' +
      p.nombre +
      '" onerror="imagenNoDisponible(this)">' +
      "</td>" +
      "<td>" +
      p.nombre +
      '<br><small class="text-muted">' +
      p.categoria +
      "</small></td>" +
      "<td>" +
      formatearPrecio(precio) +
      "</td>" +
      '<td style="width:120px">' +
      '<input type="number" class="form-control form-control-sm" min="1" value="' +
      item.cantidad +
      '" onchange="cambiarCantidad(' +
      p.id +
      ", parseInt(this.value, 10)); renderizarCarrito();\">" +
      "</td>" +
      '<td class="fw-bold">' +
      formatearPrecio(subtotal) +
      "</td>" +
      "<td>" +
      '<button class="btn btn-sm btn-outline-danger" onclick="quitarDelCarrito(' +
      p.id +
      "); renderizarCarrito();\">&times;</button>" +
      "</td>" +
      "</tr>";
  });

  contenedor.innerHTML =
    '<div class="table-responsive"><table class="table align-middle">' +
    "<thead><tr>" +
    "<th></th><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th><th></th>" +
    "</tr></thead><tbody>" +
    filas +
    "</tbody></table></div>";

  document.getElementById("total-carrito").textContent = formatearPrecio(
    totalCarrito()
  );
}
