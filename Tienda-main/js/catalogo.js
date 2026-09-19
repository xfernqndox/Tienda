// ============================================================
//  CATÁLOGO Y FILTROS
//  Usado en index.html (catálogo completo con búsqueda)
//  y en ofertas.html (solo productos con oferta).
// ============================================================

// ------------------------------------------------------------
//  Genera el HTML de una tarjeta de producto
// ------------------------------------------------------------
function tarjetaProducto(p) {
  const enOferta = p.precioOferta != null;

  // Bloque de precio (con o sin oferta)
  let htmlPrecio;
  if (enOferta) {
    const descuento = Math.round((1 - p.precioOferta / p.precio) * 100);
    htmlPrecio =
      '<span class="text-muted text-decoration-line-through me-2">' +
      formatearPrecio(p.precio) +
      "</span>" +
      '<span class="fw-bold text-danger">' +
      formatearPrecio(p.precioOferta) +
      "</span>" +
      '<span class="badge bg-danger ms-2">-' +
      descuento +
      "%</span>";
  } else {
    htmlPrecio = '<span class="fw-bold">' + formatearPrecio(p.precio) + "</span>";
  }

  return (
    '<div class="col-sm-6 col-lg-4 col-xl-3">' +
    '  <div class="card h-100 shadow-sm">' +
    '    <img src="' +
    p.imagen +
    '" class="card-img-top p-3" alt="' +
    p.nombre +
    '" onerror="imagenNoDisponible(this)">' +
    '    <div class="card-body d-flex flex-column">' +
    '      <span class="badge bg-secondary align-self-start mb-2">' +
    p.categoria +
    "</span>" +
    '      <h6 class="card-title">' +
    p.nombre +
    "</h6>" +
    '      <p class="card-text small text-muted flex-grow-1">' +
    p.descripcion +
    "</p>" +
    '      <div class="mb-2">' +
    htmlPrecio +
    "</div>" +
    '      <div class="d-grid gap-2">' +
    '        <a href="producto.html?id=' +
    p.id +
    '" class="btn btn-outline-primary btn-sm">Ver detalle</a>' +
    '        <button class="btn btn-primary btn-sm" onclick="agregarAlCarrito(' +
    p.id +
    ')">Agregar al carrito</button>' +
    "      </div>" +
    "    </div>" +
    "  </div>" +
    "</div>"
  );
}

// ------------------------------------------------------------
//  Pinta una lista de productos dentro de un contenedor
// ------------------------------------------------------------
function mostrarProductos(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  if (lista.length === 0) {
    contenedor.innerHTML =
      '<div class="col-12"><div class="alert alert-warning text-center">' +
      "No se encontraron productos.</div></div>";
    return;
  }

  contenedor.innerHTML = lista.map(tarjetaProducto).join("");
}

// ============================================================
//  PÁGINA: CATÁLOGO (index.html)
// ============================================================
function initCatalogo() {
  const inputBuscar = document.getElementById("buscar");
  const selectCategoria = document.getElementById("filtro-categoria");
  const selectOrden = document.getElementById("filtro-orden");
  const soloOfertas = document.getElementById("filtro-ofertas");
  const contadorResultados = document.getElementById("contador-resultados");

  // Llenar el select de categorías a partir de los productos
  const categorias = [...new Set(PRODUCTOS.map((p) => p.categoria))].sort();
  categorias.forEach(function (cat) {
    const opcion = document.createElement("option");
    opcion.value = cat;
    opcion.textContent = cat;
    selectCategoria.appendChild(opcion);
  });

  function aplicarFiltros() {
    const texto = inputBuscar.value.trim().toLowerCase();
    const categoria = selectCategoria.value;
    const orden = selectOrden.value;

    let resultado = PRODUCTOS.filter(function (p) {
      const coincideTexto =
        p.nombre.toLowerCase().includes(texto) ||
        p.descripcion.toLowerCase().includes(texto) ||
        p.categoria.toLowerCase().includes(texto);
      const coincideCategoria = categoria === "" || p.categoria === categoria;
      const coincideOferta = !soloOfertas.checked || p.precioOferta != null;
      return coincideTexto && coincideCategoria && coincideOferta;
    });

    // Ordenar
    if (orden === "precio-asc") {
      resultado.sort((a, b) => precioFinal(a) - precioFinal(b));
    } else if (orden === "precio-desc") {
      resultado.sort((a, b) => precioFinal(b) - precioFinal(a));
    } else if (orden === "nombre") {
      resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    mostrarProductos(resultado, "lista-productos");
    contadorResultados.textContent =
      resultado.length + (resultado.length === 1 ? " producto" : " productos");
  }

  // Escuchar cambios en todos los filtros
  inputBuscar.addEventListener("input", aplicarFiltros);
  selectCategoria.addEventListener("change", aplicarFiltros);
  selectOrden.addEventListener("change", aplicarFiltros);
  soloOfertas.addEventListener("change", aplicarFiltros);

  aplicarFiltros(); // primera carga
}

// ============================================================
//  PÁGINA: OFERTAS (ofertas.html)
// ============================================================
function initOfertas() {
  const ofertas = PRODUCTOS.filter(function (p) {
    return p.precioOferta != null;
  });
  mostrarProductos(ofertas, "lista-ofertas");
}
