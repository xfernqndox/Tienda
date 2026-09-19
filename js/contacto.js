// ============================================================
//  CONTACTO CON ASESORES (contacto.html)
//  Datos ficticios: actualizar con los reales más adelante.
// ============================================================

const ASESORES = [
  {
    nombre: "María Torres",
    area: "Ventas - Laptops y Monitores",
    whatsapp: "51987654321",
    correo: "maria.torres@impacta.pe"
  },
  {
    nombre: "Carlos Ramírez",
    area: "Ventas - Celulares y Accesorios",
    whatsapp: "51912345678",
    correo: "carlos.ramirez@impacta.pe"
  },
  {
    nombre: "Lucía Fernández",
    area: "Soporte técnico y Componentes",
    whatsapp: "51998877665",
    correo: "lucia.fernandez@impacta.pe"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("lista-asesores");

  contenedor.innerHTML = ASESORES.map(function (a) {
    const mensaje = encodeURIComponent(
      "Hola " + a.nombre + ", te escribo desde la tienda Impacta."
    );
    return (
      '<div class="col-md-4">' +
      '  <div class="card h-100 shadow-sm text-center">' +
      '    <div class="card-body">' +
      '      <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style="width:64px;height:64px;font-size:1.5rem">' +
      a.nombre.charAt(0) +
      "      </div>" +
      '      <h5 class="card-title">' +
      a.nombre +
      "</h5>" +
      '      <p class="text-muted small">' +
      a.area +
      "</p>" +
      '      <a href="https://wa.me/' +
      a.whatsapp +
      "?text=" +
      mensaje +
      '" target="_blank" rel="noopener" class="btn btn-success btn-sm w-100 mb-2">Escribir por WhatsApp</a>' +
      '      <a href="mailto:' +
      a.correo +
      '" class="btn btn-outline-primary btn-sm w-100">' +
      a.correo +
      "</a>" +
      "    </div>" +
      "  </div>" +
      "</div>"
    );
  }).join("");

  // Formulario de contacto general (demostrativo)
  const form = document.getElementById("form-contacto");
  const mensaje = document.getElementById("mensaje-contacto");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("c-nombre").value.trim();
    const email = document.getElementById("c-email").value.trim();
    const texto = document.getElementById("c-mensaje").value.trim();

    if (nombre === "" || email === "" || texto === "") {
      mensaje.className = "alert alert-danger";
      mensaje.textContent = "Completa todos los campos.";
      mensaje.classList.remove("d-none");
      return;
    }

    mensaje.className = "alert alert-success";
    mensaje.textContent =
      "¡Gracias " + nombre + "! Un asesor te responderá pronto.";
    mensaje.classList.remove("d-none");
    form.reset();
  });
});
