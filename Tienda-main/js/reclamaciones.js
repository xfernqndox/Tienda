// ============================================================
//  LIBRO DE RECLAMACIONES (reclamaciones.html)
//  No hay servidor: se valida el formulario y se muestra
//  un mensaje de confirmación con un número de registro.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-reclamo");
  const mensaje = document.getElementById("mensaje-reclamo");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const email = document.getElementById("email").value.trim();
    const tipo = document.getElementById("tipo").value;
    const detalle = document.getElementById("detalle").value.trim();

    const errores = [];

    if (nombre.length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres.");
    }
    if (!/^\d{8}$/.test(dni)) {
      errores.push("El DNI debe tener exactamente 8 dígitos.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errores.push("Ingresa un correo electrónico válido.");
    }
    if (tipo === "") {
      errores.push("Selecciona el tipo de solicitud (queja o reclamo).");
    }
    if (detalle.length < 10) {
      errores.push("El detalle debe tener al menos 10 caracteres.");
    }

    if (errores.length > 0) {
      mensaje.className = "alert alert-danger";
      mensaje.innerHTML =
        "<strong>Revisa lo siguiente:</strong><ul class='mb-0'><li>" +
        errores.join("</li><li>") +
        "</li></ul>";
      mensaje.classList.remove("d-none");
      return;
    }

    // "Registro" exitoso (solo demostrativo)
    const numero = "REC-" + Date.now().toString().slice(-6);
    mensaje.className = "alert alert-success";
    mensaje.innerHTML =
      "<strong>Reclamo registrado correctamente.</strong><br>" +
      "Número de registro: <strong>" +
      numero +
      "</strong><br>" +
      "Nos comunicaremos contigo al correo " +
      email +
      " en un plazo máximo de 30 días.";
    mensaje.classList.remove("d-none");
    form.reset();
  });
});
