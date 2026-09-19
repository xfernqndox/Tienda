// ============================================================
//  DATOS DE PRODUCTOS (en duro)
//  Tienda de tecnología "Impacta"
//  Categorías: Laptops, Celulares, Componentes, Accesorios, Monitores
// ============================================================

const PRODUCTOS = [
  // ---------------------- LAPTOPS ----------------------
  {
    id: 1,
    nombre: "Laptop Impacta Core i5 15.6\"",
    categoria: "Laptops",
    precio: 2799.0,
    precioOferta: 2399.0,
    imagen: "img/productos/laptop-i5.jpg",
    descripcion:
      "Laptop ideal para trabajo y estudios, con pantalla Full HD de 15.6 pulgadas y batería de larga duración.",
    especificaciones: {
      Procesador: "Intel Core i5-1235U",
      "Memoria RAM": "16 GB DDR4",
      Almacenamiento: "512 GB SSD NVMe",
      Pantalla: "15.6\" Full HD (1920x1080)",
      "Tarjeta gráfica": "Intel Iris Xe",
      "Sistema operativo": "Windows 11 Home",
      Peso: "1.7 kg"
    }
  },
  {
    id: 2,
    nombre: "Laptop Gamer Impacta RTX 4060",
    categoria: "Laptops",
    precio: 5499.0,
    precioOferta: null,
    imagen: "img/productos/laptop-gamer.jpg",
    descripcion:
      "Rendimiento de alto nivel para juegos y edición de video, con refrigeración mejorada y teclado retroiluminado.",
    especificaciones: {
      Procesador: "Intel Core i7-13700H",
      "Memoria RAM": "16 GB DDR5",
      Almacenamiento: "1 TB SSD NVMe",
      Pantalla: "15.6\" 165 Hz (1920x1080)",
      "Tarjeta gráfica": "NVIDIA GeForce RTX 4060 8 GB",
      "Sistema operativo": "Windows 11 Home",
      Peso: "2.3 kg"
    }
  },
  {
    id: 3,
    nombre: "Laptop Impacta Ultrabook 14\"",
    categoria: "Laptops",
    precio: 3899.0,
    precioOferta: 3499.0,
    imagen: "img/productos/ultrabook.jpg",
    descripcion:
      "Diseño delgado y liviano en aluminio, perfecta para llevar a todos lados sin sacrificar potencia.",
    especificaciones: {
      Procesador: "AMD Ryzen 7 7730U",
      "Memoria RAM": "16 GB LPDDR4X",
      Almacenamiento: "512 GB SSD NVMe",
      Pantalla: "14\" 2.2K (2240x1400)",
      "Tarjeta gráfica": "AMD Radeon",
      "Sistema operativo": "Windows 11 Home",
      Peso: "1.35 kg"
    }
  },

  // ---------------------- CELULARES ----------------------
  {
    id: 4,
    nombre: "Celular Impacta Note 12",
    categoria: "Celulares",
    precio: 999.0,
    precioOferta: 799.0,
    imagen: "img/productos/note-12.jpg",
    descripcion:
      "Gran pantalla AMOLED, batería de 5000 mAh y triple cámara para el día a día.",
    especificaciones: {
      Pantalla: "6.67\" AMOLED 120 Hz",
      Procesador: "Snapdragon 685",
      "Memoria RAM": "8 GB",
      Almacenamiento: "256 GB",
      "Cámara principal": "108 MP + 8 MP + 2 MP",
      Batería: "5000 mAh (carga 33W)",
      "Sistema operativo": "Android 13"
    }
  },
  {
    id: 5,
    nombre: "Celular Impacta Pro 5G",
    categoria: "Celulares",
    precio: 2299.0,
    precioOferta: null,
    imagen: "img/productos/pro-5g.jpg",
    descripcion:
      "Conectividad 5G, rendimiento fluido y carga ultra rápida para usuarios exigentes.",
    especificaciones: {
      Pantalla: "6.7\" AMOLED 144 Hz",
      Procesador: "Snapdragon 8 Gen 2",
      "Memoria RAM": "12 GB",
      Almacenamiento: "512 GB",
      "Cámara principal": "50 MP + 50 MP + 8 MP",
      Batería: "4600 mAh (carga 120W)",
      "Sistema operativo": "Android 14"
    }
  },
  {
    id: 6,
    nombre: "Celular Impacta Lite",
    categoria: "Celulares",
    precio: 549.0,
    precioOferta: null,
    imagen: "img/productos/lite.jpg",
    descripcion:
      "Económico y confiable, con buena autonomía y espacio suficiente para tus aplicaciones.",
    especificaciones: {
      Pantalla: "6.5\" IPS LCD 90 Hz",
      Procesador: "MediaTek Helio G85",
      "Memoria RAM": "4 GB",
      Almacenamiento: "128 GB",
      "Cámara principal": "50 MP + 2 MP",
      Batería: "5000 mAh (carga 15W)",
      "Sistema operativo": "Android 13"
    }
  },

  // ---------------------- COMPONENTES ----------------------
  {
    id: 7,
    nombre: "Tarjeta de Video RTX 4060 Ti 8GB",
    categoria: "Componentes",
    precio: 1899.0,
    precioOferta: 1699.0,
    imagen: "img/productos/rtx-4060ti.jpg",
    descripcion:
      "Ideal para gaming en 1080p y 1440p con tecnología de generación de fotogramas.",
    especificaciones: {
      "Memoria": "8 GB GDDR6",
      "Bus de memoria": "128 bits",
      "Núcleos CUDA": "4352",
      "Interfaz": "PCIe 4.0",
      "Conector de poder": "1x 8 pines",
      "Salidas": "3x DisplayPort, 1x HDMI 2.1"
    }
  },
  {
    id: 8,
    nombre: "Procesador Ryzen 5 5600X",
    categoria: "Componentes",
    precio: 649.0,
    precioOferta: null,
    imagen: "img/productos/ryzen-5600x.jpg",
    descripcion:
      "6 núcleos y 12 hilos para gaming y multitarea, compatible con placas AM4.",
    especificaciones: {
      "Núcleos / Hilos": "6 / 12",
      "Frecuencia base": "3.7 GHz",
      "Frecuencia turbo": "4.6 GHz",
      "Caché L3": "32 MB",
      Socket: "AM4",
      TDP: "65 W"
    }
  },
  {
    id: 9,
    nombre: "Memoria RAM 16GB DDR4 3200MHz",
    categoria: "Componentes",
    precio: 189.0,
    precioOferta: 159.0,
    imagen: "img/productos/ram-16gb.jpg",
    descripcion:
      "Kit de memoria con disipador de calor para mayor estabilidad en tareas exigentes.",
    especificaciones: {
      Capacidad: "16 GB (2x8 GB)",
      Tipo: "DDR4",
      Velocidad: "3200 MHz",
      Latencia: "CL16",
      Voltaje: "1.35 V",
      "Perfil XMP": "Sí"
    }
  },

  // ---------------------- ACCESORIOS ----------------------
  {
    id: 10,
    nombre: "Teclado Mecánico Impacta RGB",
    categoria: "Accesorios",
    precio: 259.0,
    precioOferta: 199.0,
    imagen: "img/productos/teclado-mecanico.jpg",
    descripcion:
      "Switches azules, iluminación RGB personalizable y estructura resistente.",
    especificaciones: {
      Tipo: "Mecánico",
      Switch: "Blue (clicky)",
      Distribución: "Español Latinoamérica",
      Iluminación: "RGB por tecla",
      Conexión: "USB-C desmontable",
      "Anti-ghosting": "Sí, N-Key Rollover"
    }
  },
  {
    id: 11,
    nombre: "Mouse Inalámbrico Impacta Silent",
    categoria: "Accesorios",
    precio: 89.0,
    precioOferta: null,
    imagen: "img/productos/mouse-silent.jpg",
    descripcion:
      "Clics silenciosos, sensor preciso y batería de larga duración para oficina.",
    especificaciones: {
      Sensor: "Óptico 1600 DPI",
      Conexión: "Inalámbrico 2.4 GHz",
      Botones: "6",
      Batería: "1x AA (hasta 12 meses)",
      Compatibilidad: "Windows, macOS, Linux"
    }
  },
  {
    id: 12,
    nombre: "Audífonos Impacta Bluetooth ANC",
    categoria: "Accesorios",
    precio: 399.0,
    precioOferta: 329.0,
    imagen: "img/productos/audifonos-anc.jpg",
    descripcion:
      "Cancelación activa de ruido, sonido envolvente y hasta 30 horas de reproducción.",
    especificaciones: {
      Tipo: "Over-ear",
      "Cancelación de ruido": "Activa (ANC)",
      Bluetooth: "5.3",
      Autonomía: "30 horas",
      "Carga rápida": "10 min = 5 horas",
      Micrófono: "Integrado con ENC"
    }
  },

  // ---------------------- MONITORES ----------------------
  {
    id: 13,
    nombre: "Monitor Impacta 24\" Full HD 75Hz",
    categoria: "Monitores",
    precio: 549.0,
    precioOferta: null,
    imagen: "img/productos/monitor-24.jpg",
    descripcion:
      "Panel IPS con colores vivos y bordes delgados, perfecto para estudio y trabajo.",
    especificaciones: {
      "Tamaño": "23.8 pulgadas",
      Resolución: "1920x1080 (Full HD)",
      Panel: "IPS",
      "Tasa de refresco": "75 Hz",
      "Tiempo de respuesta": "5 ms",
      Puertos: "1x HDMI, 1x VGA"
    }
  },
  {
    id: 14,
    nombre: "Monitor Gamer Impacta 27\" QHD 165Hz",
    categoria: "Monitores",
    precio: 1299.0,
    precioOferta: 1099.0,
    imagen: "img/productos/monitor-27.jpg",
    descripcion:
      "Alta tasa de refresco y resolución QHD para una experiencia de juego fluida.",
    especificaciones: {
      "Tamaño": "27 pulgadas",
      Resolución: "2560x1440 (QHD)",
      Panel: "IPS",
      "Tasa de refresco": "165 Hz",
      "Tiempo de respuesta": "1 ms (MPRT)",
      "Sincronización": "AMD FreeSync Premium",
      Puertos: "2x HDMI, 1x DisplayPort"
    }
  },
  {
    id: 15,
    nombre: "Monitor Impacta Ultrawide 34\"",
    categoria: "Monitores",
    precio: 2199.0,
    precioOferta: null,
    imagen: "img/productos/monitor-34.jpg",
    descripcion:
      "Formato ultrapanorámico 21:9 para multitarea y productividad sin límites.",
    especificaciones: {
      "Tamaño": "34 pulgadas",
      Resolución: "3440x1440 (UWQHD)",
      Panel: "VA curvo 1500R",
      "Tasa de refresco": "100 Hz",
      "Tiempo de respuesta": "4 ms",
      Puertos: "2x HDMI, 1x DisplayPort, USB-C"
    }
  }
];
