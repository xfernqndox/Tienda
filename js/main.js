// ============================================================
//  SCRIPT GENERAL
//  Se ejecuta en todas las páginas: actualiza el navbar
//  (contador del carrito y estado de la sesión).
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  actualizarContadorCarrito();
  actualizarMenuUsuario();

  // Botón "Cerrar sesión" del navbar
  const btnSalir = document.getElementById("btn-salir");
  if (btnSalir) {
    btnSalir.addEventListener("click", function (e) {
      e.preventDefault();
      cerrarSesion();
      window.location.href = "index.html";
    });
  }
});

// Muestra "Iniciar sesión" o el nombre del usuario según el estado
function actualizarMenuUsuario() {
  const sesion = obtenerSesion();
  const enlaceLogin = document.getElementById("enlace-login");
  const menuUsuario = document.getElementById("menu-usuario");
  const nombreUsuario = document.getElementById("nombre-usuario");

  if (!enlaceLogin || !menuUsuario) return;

  if (sesion) {
    enlaceLogin.classList.add("d-none");
    menuUsuario.classList.remove("d-none");
    if (nombreUsuario) nombreUsuario.textContent = sesion.usuario;
  } else {
    enlaceLogin.classList.remove("d-none");
    menuUsuario.classList.add("d-none");
  }
}
