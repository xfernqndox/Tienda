// ============================================================
//  UTILIDADES COMPARTIDAS
//  Funciones que se usan en varias páginas de la tienda
// ============================================================

// Ruta de la imagen que se muestra cuando no se encuentra la del producto
const IMG_NO_DISPONIBLE = "img/no-disponible.svg";

// Claves usadas en localStorage
const CLAVE_CARRITO = "impacta_carrito";
const CLAVE_SESION = "impacta_sesion";

// Credenciales válidas (en duro, solo para el curso)
const USUARIO_VALIDO = "admin";
const CLAVE_VALIDA = "admin";

// ------------------------------------------------------------
//  Formato de precios: 1234.5  ->  "S/ 1,234.50"
// ------------------------------------------------------------
function formatearPrecio(monto) {
  return "S/ " + Number(monto).toLocaleString("es-PE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// ------------------------------------------------------------
//  Manejo de imagen faltante
//  Uso en el HTML: <img ... onerror="imagenNoDisponible(this)">
// ------------------------------------------------------------
function imagenNoDisponible(img) {
  img.onerror = null; // evita bucle si tampoco existe la de reemplazo
  img.src = IMG_NO_DISPONIBLE;
  img.classList.add("img-no-disponible");
}

// ------------------------------------------------------------
//  Buscar un producto por su id
// ------------------------------------------------------------
function buscarProducto(id) {
  return PRODUCTOS.find(function (p) {
    return p.id === Number(id);
  });
}

// ------------------------------------------------------------
//  Precio final (aplica oferta si existe)
// ------------------------------------------------------------
function precioFinal(producto) {
  return producto.precioOferta ? producto.precioOferta : producto.precio;
}

// ------------------------------------------------------------
//  CARRITO (se guarda en localStorage como lista de objetos)
//  Estructura: [{ id: 1, cantidad: 2 }, ...]
// ------------------------------------------------------------
function obtenerCarrito() {
  const datos = localStorage.getItem(CLAVE_CARRITO);
  return datos ? JSON.parse(datos) : [];
}

function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
  actualizarContadorCarrito();
}

function agregarAlCarrito(id, cantidad) {
  cantidad = cantidad || 1;
  const carrito = obtenerCarrito();
  const item = carrito.find(function (i) {
    return i.id === Number(id);
  });

  if (item) {
    item.cantidad += cantidad;
  } else {
    carrito.push({ id: Number(id), cantidad: cantidad });
  }

  guardarCarrito(carrito);
}

function cambiarCantidad(id, cantidad) {
  const carrito = obtenerCarrito();
  const item = carrito.find(function (i) {
    return i.id === Number(id);
  });
  if (!item) return;

  item.cantidad = cantidad;
  if (item.cantidad <= 0) {
    quitarDelCarrito(id);
  } else {
    guardarCarrito(carrito);
  }
}

function quitarDelCarrito(id) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter(function (i) {
    return i.id !== Number(id);
  });
  guardarCarrito(carrito);
}

function vaciarCarrito() {
  localStorage.removeItem(CLAVE_CARRITO);
  actualizarContadorCarrito();
}

// Cantidad total de unidades en el carrito
function contarUnidadesCarrito() {
  return obtenerCarrito().reduce(function (total, i) {
    return total + i.cantidad;
  }, 0);
}

// Monto total del carrito
function totalCarrito() {
  return obtenerCarrito().reduce(function (total, i) {
    const producto = buscarProducto(i.id);
    if (!producto) return total;
    return total + precioFinal(producto) * i.cantidad;
  }, 0);
}

// Actualiza el número que aparece en el ícono del carrito (navbar)
function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = contarUnidadesCarrito();
  }
}

// ------------------------------------------------------------
//  SESIÓN DE USUARIO
// ------------------------------------------------------------
function obtenerSesion() {
  const datos = localStorage.getItem(CLAVE_SESION);
  return datos ? JSON.parse(datos) : null;
}

function iniciarSesion(usuario) {
  localStorage.setItem(CLAVE_SESION, JSON.stringify({ usuario: usuario }));
}

function cerrarSesion() {
  localStorage.removeItem(CLAVE_SESION);
}
