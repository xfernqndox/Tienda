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
    nombre: "iPhone 14 Pro Max",
    categoria: "Celulares",
    precio: 1899.0,
    precioOferta: 1550.0,
    imagen: "",
    descripcion:
      "Pantalla ProMotion de 6.7 pulgadas, Dynamic Island y chip A16 Bionic",
    especificaciones: {
      Pantalla: "6.7\" Super Retina XDR OLED 120 Hz",
      Procesador: "Apple A16 Bionic",
      "Memoria RAM": "6 GB",
      Almacenamiento: "1 TB",
      "Cámara principal": "48 MP + 12 MP + 12 MP",
      Batería: "4323 mAh (Lightning)",
      "Sistema operativo": "iOS 16"
    }
  },
  {
    id: 5,
    nombre: "iPhone 15 Pro Max",
    categoria: "Celulares",
    precio: 2299.0,
    precioOferta: null,
    imagen: "img/productos/pro-5g.jpg",
    descripcion:
      "Diseño de titanio, puerto USB-C y zoom óptico de 5x",
    especificaciones: {
      Pantalla: "6.7\" Super Retina XDR OLED 120 Hz",
      Procesador: "Apple A17 Pro",
      "Memoria RAM": "8 GB",
      Almacenamiento: "1 TB",
      "Cámara principal": "48 MP + 12 MP + 12 MP (Teleobjetivo 5x)",
      Batería: "4422 mAh (USB-C)",
      "Sistema operativo": "iOS 17"
    }
  },
  {
    id: 6,
    nombre: "iPhone 16 Pro Max",
    categoria: "Celulares",
    precio: 3789.99,
    precioOferta: null,
    imagen: "img/productos/lite.jpg",
    descripcion:
      "Pantalla gigante de 6.9 pulgadas, Botón Control de Cámara y Apple Intelligence",
    especificaciones: {
      Pantalla: "6.9\" Super Retina XDR OLED 120 Hz",
      Procesador: "Apple A18 Pro",
      "Memoria RAM": "8 GB",
      Almacenamiento: "Desde 256 GB hasta 1 TB",
      "Cámara principal": "48 MP (Fusion) + 48 MP (Ultra gran angular) + 12 MP (Teleobjetivo 5x)",
      Batería: "4685 mAh (Carga inalámbrica MagSafe 25W)",
      "Sistema operativo": "iOS 18"
    }
  },

  {
    id: 6,
    nombre: "iPhone 17 Pro Max",
    categoria: "Celulares",
    precio: 5089.99,
    precioOferta: null,
    imagen: "img/productos/lite.jpg",
    descripcion:
      "Máxima potencia con 12 GB de RAM, conectividad avanzada y chip N1",
    especificaciones: {
      Pantalla: "6.9\" OLED LTPO 120 Hz (3000 nits pico)",
      Procesador: "Apple A19 Pro",
      "Memoria RAM": "12 GB",
      Almacenamiento: "Desde 256 GB hasta 2 TB",
      "Cámara principal": "Sistema Pro de 48 MP con zoom avanzado",
      Batería: "Hasta 39 horas de reproducción de video (Carga ultrarrápida)",
      "Sistema operativo": "iOS 19"
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
    nombre: "Teclado Mecánico Redragon Kumara K552 RGB",
    categoria: "Accesorios",
    precio: 189.0,
    precioOferta: 149.0,
    imagen: "img/productos/teclado-redragon-kumara.jpg",
    descripcion: "Diseño compacto TKL sin teclado numérico, switches mecánicos y retroiluminación RGB vívida",
    especificaciones: {
      Tipo: "Mecánico TKL",
      Switch: "Outemu Red / Blue",
      Distribución: "Español",
      Iluminación: "RGB Chroma",
      Conexión: "Cable USB desmontable",
      "Anti-ghosting": "Sí, 100% Anti-ghosting"
    }
  },
  
{
    id: 12,
    nombre: "Teclado Mecánico Logitech G PRO X RGB",
    categoria: "Accesorios",
    precio: 549.0,
    precioOferta: 489.0,
    imagen: "img/productos/teclado-logitech-gprox.jpg",
    descripcion: "Diseñado para profesionales de esports con switches intercambiables y perfil compacto",
    especificaciones: {
      Tipo: "Mecánico Pro TKL",
      Switch: "GX Blue / Brown intercambiables",
      Distribución: "Español",
      Iluminación: "LIGHTSYNC RGB",
      Conexión: "Cable Micro-USB desmontable",
      "Anti-ghosting": "Sí, N-Key Rollover"
    }
  },

  {
    id: 13,
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
    id: 14,
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

  { id: 15,
    nombre: "Mouse Inalámbrico Logitech G PRO X SUPERLIGHT 2",
    categoria: "Accesorios",
    precio: 629.0,
    precioOferta: 579.0,
    imagen: "img",
    descripcion: "Ultraligero de rendimiento superior con tecnología inalámbrica LIGHTSPEED y sensor HERO 2",
    especificaciones: {
      Tipo: "Mouse inalámbrico gaming",
      Sensor: "HERO 2 (hasta 32,000 DPI)",
      Peso: "60 gramos",
      Conexión: "Inalámbrico LIGHTSPEED / USB",
      Batería: "Hasta 95 horas de duración",
      Compatibilidad: "PC y Mac"
    }
  },


  // ---------------------- MONITORES ----------------------
  {
    id:16,
    nombre: "ASUS ROG Strix XG259CMS",
    categoria: "Monitores",
    precio: 1899.0,
    precioOferta: null,
    imagen: "img/productos/monitor-24.jpg",
    descripcion:
      "Pantalla rápida de 24.5 pulgadas diseñada para esports y máxima fluidez competitiva",
    especificaciones: {
      "Tamaño": "24.5 pulgadas",
      Resolución: "1920x1080 (Full HD)",
      Panel: "FAST IPS",
      "Tasa de refresco": "310 Hz",
      "Tiempo de respuesta": "0.3 ms",
      Puertos: "1x HDMI, 1x DisplayPort, USB-C"
    }
  },
  {
    id: 17,
    nombre: "ASUS ROG Strix OLED XG27AQDMG",
    categoria: "Monitores",
    precio: 3299.0,
    precioOferta: 1099.0,
    imagen: "img/productos/monitor-27.jpg",
    descripcion:
      "Calidad visual superior con panel OLED brillante y negros absolutos para gaming avanzado",
    especificaciones: {
      "Tamaño": "27 pulgadas",
      Resolución: "2560x1440 (QHD)",
      Panel: "WOLED brillante",
      "Tasa de refresco": "240 Hz",
      "Tiempo de respuesta": "0.3 ms",
      Puertos: "2x HDMI, 1x DisplayPort, USB Hub"
    }
  },
  {
    id: 18,
    nombre: "ASUS ROG Swift OLED PG34WCDM",
    categoria: "Monitores",
    precio: 6299.0,
    precioOferta: null,
    imagen: "",
    descripcion:
      "Inmersión total ultra panorámica con tecnología OLED y alta velocidad de refresco",
    especificaciones: {
      "Tamaño": "34 pulgadas",
      Resolución: "3440x1440 (UWQHD)",
      Panel: "WOLED curvo 800R",
      "Tasa de refresco": "240 Hz",
      "Tiempo de respuesta": "0.3 ms",
      Puertos: "2x HDMI, 1x DisplayPort, USB-C (90W)"
    }
  }
];