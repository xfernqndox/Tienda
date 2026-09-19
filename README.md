# Impacta - Tienda de Tecnología

Proyecto para el curso de Desarrollo Web. Hecho solo con **HTML, CSS y JavaScript**,
usando **Bootstrap 5** (por CDN) para el diseño. No necesita instalación ni servidor
de backend.

## Cómo abrir el proyecto

Abre `index.html` en el navegador. Todo funciona con doble clic.
(Opcional: usar la extensión *Live Server* de VS Code para recargar automáticamente.)

## Estructura

```
Tienda/
├── index.html          Catálogo + búsqueda / filtros
├── ofertas.html        Productos en oferta
├── producto.html       Especificaciones del producto (?id=)
├── carrito.html        Carrito de compras
├── login.html          Login de usuario
├── reclamaciones.html  Libro de reclamaciones
├── contacto.html       Contacto con asesores
├── css/
│   └── styles.css      Estilos propios (complementan Bootstrap)
├── js/
│   ├── productos.js    Datos de los productos (en duro)
│   ├── utils.js        Funciones compartidas (precio, carrito, sesión)
│   ├── main.js         Navbar (contador del carrito y sesión)
│   ├── catalogo.js     Catálogo, filtros y ofertas
│   ├── producto.js     Detalle del producto
│   ├── carrito.js      Lógica del carrito
│   ├── login.js        Validación del login
│   ├── reclamaciones.js Validación del libro de reclamaciones
│   └── contacto.js     Asesores y formulario de contacto
└── img/
    ├── no-disponible.svg   Imagen usada cuando falta la del producto
    └── productos/          Imágenes de productos (ver LEEME.txt)
```

## Funcionalidades (requisitos del curso)

1. **Catálogo de productos** – `index.html`, tarjetas generadas desde `productos.js`.
2. **Filtro / búsqueda** – por texto, categoría, orden y "solo ofertas".
3. **Especificaciones del producto** – `producto.html?id=N`, tabla de specs.
4. **Carrito de compras** – guardado en `localStorage` (persiste al recargar).
5. **Ofertas** – productos con `precioOferta`, se muestra el % de descuento.
6. **Libro de reclamaciones** – formulario con validación en JavaScript.
7. **Contacto con asesores** – botones de WhatsApp (`wa.me`) y correo.
8. **Login de usuario** – credenciales en duro: **admin / admin**.
9. **Redirección a redes sociales** – íconos SVG en el footer.

## Notas

- El login es solo demostrativo (no es seguridad real).
- Los datos de asesores y redes sociales son **ficticios**: reemplázalos en
  `js/contacto.js` y en el footer de los `.html`.
- El header y el footer están repetidos en cada página (sin includes).
