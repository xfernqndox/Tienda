// ============================================================
//  DATOS DE PRODUCTOS
//  Categorías: Laptops, Celulares, Componentes, Accesorios, Monitores
// ============================================================

const PRODUCTOS = [
  // ---------------------- LAPTOPS ----------------------
  {
    id: 1,
    nombre: "MacBook Air 13\" M1",
    categoria: "Laptops",
    precio: 4299.0,
    precioOferta: 3899.0,
    imagen: "img/productos/13.jpg",
    descripcion:
      "Delgada, ligera y con una batería de larga duración gracias al chip M1, ideal para el día a día y estudiantes.",
    especificaciones: {
      Procesador: "Apple M1 (CPU de 8 núcleos y GPU de 7 núcleos)",
      "Memoria RAM": "8 GB unificada",
      Almacenamiento: "256 GB SSD NVMe",
      Pantalla: "13.3\" Retina (2560x1600)",
      "Tarjeta gráfica": "Apple GPU 7 núcleos",
      "Sistema operativo": "macOS",
      Peso: "1.29 kg"
    }
  },
  {
    id: 2,
    nombre: "MacBook Air 15\" M3",
    categoria: "Laptops",
    precio: 6299.0,
    precioOferta: 5799.0,
    imagen: "img/productos/15.jpg",
    descripcion:
      "Pantalla amplia de 15 pulgadas en un diseño ultradelgado, impulsada por el potente y eficiente chip M3.",
    especificaciones: {
      Procesador: "Apple M3 (CPU de 8 núcleos y GPU de 10 núcleos)",
      "Memoria RAM": "16 GB unificada",
      Almacenamiento: "512 GB SSD NVMe",
      Pantalla: "15.3\" Liquid Retina (2880x1864)",
      "Tarjeta gráfica": "Apple GPU 10 núcleos",
      "Sistema operativo": "macOS",
      Peso: "1.51 kg"
    }
  },
  {
    id: 3,
    nombre: "MacBook Pro 14\" M3 Pro",
    categoria: "Laptops",
    precio: 8999.0,
    precioOferta: 8299.0,
    imagen: "img/productos/14.jpg",
    descripcion:
      "Rendimiento extremo para profesionales exigentes, con pantalla Liquid Retina XDR de 120 Hz y máxima conectividad.",
    especificaciones: {
      Procesador: "Apple M3 Pro (CPU de 11 núcleos y GPU de 14 núcleos)",
      "Memoria RAM": "18 GB unificada",
      Almacenamiento: "512 GB SSD NVMe",
      Pantalla: "14.2\" Liquid Retina XDR 120 Hz (3024x1964)",
      "Tarjeta gráfica": "Apple GPU 14 núcleos",
      "Sistema operativo": "macOS",
      Peso: "1.61 kg"
    }
  },

  // ---------------------- CELULARES ----------------------
  {
    id: 4,
    nombre: "iPhone 14 Pro Max",
    categoria: "Celulares",
    precio: 1899.0,
    precioOferta: 1550.0,
    imagen: "img/productos/14pro.jpg",
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
    imagen: "img/productos/15pro.jpg",
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
    imagen: "img/productos/16max.jpg",
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
    imagen: "img/productos/17pro.jpg",
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
    imagen: "img/productos/rtx-ti.jpg",
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
    imagen: "img/productos/ryzen-5.jpg",
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
    imagen: "img/productos/ram.jpg",
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
    nombre: "Teclado Mecánico FiddlerZ RGB",
    categoria: "Accesorios",
    precio: 259.0,
    precioOferta: 199.0,
    imagen: "img/productos/fiddler.jpg",
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
    imagen: "img/productos/k552.jpg",
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
    imagen: "img/productos/6pro.jpg",
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
     nombre: "Mouse Inalámbrico Logitech M220 Silent",
   categoria: "Accesorios",
   precio: 79.0,
   precioOferta: null,
   imagen: "img/productos/mouse.jpg",
   descripcion:
    "Disfruta de la misma sensación de clic pero un 90% menos de ruido, diseño compacto y seguimiento óptico avanzado.",
   especificaciones: {
    Sensor: "Óptico de alta precisión (1000 DPI)",
    Conexión: "Inalámbrico 2.4 GHz mediante nano receptor USB",
    Botones: "3",
    Batería: "1x AA (hasta 18 meses)",
    Compatibilidad: "Windows, macOS, ChromeOS, Linux"
    },
    },
  {
    id: 14,
    nombre: "Audífonos Bluetooth ANC",
    categoria: "Accesorios",
    precio: 399.0,
    precioOferta: 329.0,
    imagen: "img/productos/auri.jpg",
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
    imagen: "img/productos/mouse-pro.jpg",
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
    imagen: "img/productos/pantalla245.jpg",
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
    imagen: "img/productos/pulgas27.jpg",
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
    imagen: "img/productos/monitorasus.jpg",
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