// ============================================================
//  LOGIN DE USUARIO (login.html)
//  Credenciales en duro:  usuario = admin  /  clave = admin
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  // Si ya hay sesión, redirige al inicio
  if (obtenerSesion()) {
    window.location.href = "index.html";
    return;
  }

  const form = document.getElementById("form-login");
  const mensaje = document.getElementById("mensaje-login");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("clave").value;

    // Validación básica
    if (usuario === "" || clave === "") {
      mostrarMensaje("Completa todos los campos.", "danger");
      return;
    }

    // Verificación de credenciales
    if (usuario === USUARIO_VALIDO && clave === CLAVE_VALIDA) {
      iniciarSesion(usuario);
      mostrarMensaje("¡Bienvenido! Redirigiendo...", "success");
      setTimeout(function () {
        window.location.href = "index.html";
      }, 1000);
    } else {
      mostrarMensaje("Usuario o contraseña incorrectos.", "danger");
    }
  });

  function mostrarMensaje(texto, tipo) {
    mensaje.className = "alert alert-" + tipo;
    mensaje.textContent = texto;
    mensaje.classList.remove("d-none");
  }
});
