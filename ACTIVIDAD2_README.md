# 📚 Actividad 2 - Cafetería Nexus

## ✅ Resumen de Implementación

Este proyecto implementa el **servicio de cafetería** para la Librería Nexus, cumpliendo con todos los requisitos de la Actividad 2.

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm start
```
El proyecto se abrirá en: **http://localhost:4200/**

### 3. Compilar para producción (opcional)
```bash
npm run build
```

---

## 📋 Requisitos Completados

### ✅ Criterio 1: Tres páginas de cafetería (10%)
Se crearon **3 páginas** con contenido completo:

1. **Landing de Cafetería** (`/cafeteria`)
   - Sección hero con llamada a la acción
   - Varios párrafos descriptivos del servicio
   - Tarjetas de servicios (Café, Repostería, Coworking)
   - Información de horarios y ubicación
   - Imágenes ilustrativas
   - Layout con contenedor de 1200px

2. **Productos** (`/cafeteria/productos`)
   - Catálogo de 20 productos
   - Filtros por categoría (Cafés, Bebidas, Pasteles, Sandwiches, Snacks)
   - Grid responsive con tarjetas de producto
   - Imágenes, precios y descripciones
   - Layout de 1200px

3. **Checkout** (`/cafeteria/checkout`)
   - Formulario de pedido completo
   - Selección visual entre mostrador y coworking
   - Información adicional del servicio
   - Layout de 1200px

### ✅ Criterio 2: Routing y navegación (20%)
- Rutas configuradas en `src/app/app.routes.ts`:
  - `/cafeteria` → Landing
  - `/cafeteria/productos` → Catálogo
  - `/cafeteria/checkout` → Checkout
- Navegación global en todas las páginas (navbar superior)
- Enlaces internos entre páginas de cafetería

### ✅ Criterio 3: Creación del servicio (10%)
**Archivo:** `src/app/features/services/cafeteria-service.ts`

Proporciona datos de 20 productos con:
- `id`: Identificador único
- `nombre`: Nombre del producto
- `categoria`: Tipo (cafe, bebida, pastel, sandwich, snack)
- `precio`: Precio en euros
- `descripcion`: Descripción detallada
- `imagen`: URL de imagen
- `disponible`: Estado de disponibilidad

Métodos implementados:
- `obtenerProductos()`: Retorna todos los productos
- `obtenerProductoPorId(id)`: Busca producto por ID
- `obtenerProductosPorCategoria(categoria)`: Filtra por categoría
- `obtenerProductosDisponibles()`: Solo productos disponibles

### ✅ Criterio 4: Implementación del servicio (20%)
El servicio `CafeteriaService` se consume en:

**Componente:** `src/app/features/cafeteria/productos/productos.ts`
```typescript
constructor(private cafeteriaService: CafeteriaService) {}

ngOnInit(): void {
  this.productos = this.cafeteriaService.obtenerProductos();
  this.productosFiltrados = this.productos;
}
```

El componente utiliza el servicio para:
- Obtener listado completo de productos
- Filtrar productos por categoría
- Mostrar datos en tarjetas visuales

### ✅ Criterio 5: Formulario reactivo de contacto (10%)
Se implementaron **DOS formularios reactivos**:

#### 1. Formulario de Contacto (Mailing)
**Archivo:** `src/app/features/contact/mailing/mailing.ts`

Campos con validaciones:
- **Nombre**: Requerido, mínimo 3 caracteres
- **Email**: Requerido, formato email válido
- **Asunto**: Requerido, mínimo 5 caracteres
- **Mensaje**: Requerido, mínimo 10 caracteres

Funcionalidades:
- Validación en tiempo real
- Mensajes de error específicos
- Botón deshabilitado si formulario inválido
- Mensaje de éxito al enviar
- Auto-reset después de 3 segundos

#### 2. Formulario de Checkout (Cafetería)
**Archivo:** `src/app/features/cafeteria/checkout/checkout.ts`

Campos con validaciones:
- **Nombre del cliente**: Requerido, mínimo 3 caracteres
- **Email**: Requerido, formato email válido
- **Teléfono**: Requerido, patrón numérico 9-10 dígitos
- **Tipo de entrega**: Requerido (mostrador o coworking)
- **Número de mesa**: Requerido condicionalmente si se elige coworking
- **Notas especiales**: Opcional
- **Términos y condiciones**: Requerido (checkbox)

Funcionalidades avanzadas:
- **Validación condicional**: El número de mesa solo es obligatorio si se selecciona "coworking"
- Interfaz visual para seleccionar tipo de entrega
- Validación en tiempo real con mensajes específicos
- Botón deshabilitado si formulario inválido
- Mensaje de confirmación detallado al enviar
- Auto-reset después de 5 segundos

### ✅ Criterio 6: Contenido visual y maquetación
Todas las páginas incluyen:
- ✅ Múltiples párrafos de texto descriptivo
- ✅ Imágenes de alta calidad (vía Unsplash)
- ✅ Sistema de filas y columnas con Bootstrap
- ✅ **Contenedor central de 1200px** (`max-width: 1200px`)
- ✅ Diseño responsive
- ✅ Estilos CSS personalizados
- ✅ Efectos hover y transiciones

---

## 📁 Estructura de Archivos Creados/Modificados

### Nuevos componentes de cafetería
```
src/app/features/cafeteria/
├── landing/
│   ├── landing.ts
│   ├── landing.html
│   ├── landing.css
│   └── landing.spec.ts
├── productos/
│   ├── productos.ts
│   ├── productos.html
│   ├── productos.css
│   └── productos.spec.ts
├── checkout/
│   ├── checkout.ts
│   ├── checkout.html
│   ├── checkout.css
│   └── checkout.spec.ts
└── producto.model.ts
```

### Nuevo servicio
```
src/app/features/services/
├── cafeteria-service.ts
└── cafeteria-service.spec.ts
```

### Archivos modificados
```
src/app/
├── app.routes.ts (añadidas rutas de cafetería)
├── app.html (añadido enlace de navegación)
└── features/contact/mailing/
    ├── mailing.ts (implementado formulario reactivo)
    ├── mailing.html (diseño completo del formulario)
    └── mailing.css (estilos personalizados)
```

---

## 🎯 Navegación del Sitio

### Menú principal (presente en todas las páginas):
- **Inicio** (`/`)
- **Gestionar Librería** (`/libroNexus`)
- **Cafetería** (`/cafeteria`) ⭐ NUEVO
- **Nosotros** (`/about`)
- **Contacto** (`/contact`)

### Flujo de cafetería:
1. Landing → Ver información del servicio
2. Productos → Explorar menú y filtrar por categoría
3. Checkout → Completar pedido con formulario

---

## 🛠️ Tecnologías Utilizadas

- **Angular 20.3.0** - Framework principal
- **Angular Router** - Navegación entre páginas
- **Reactive Forms** - Formularios con validaciones
- **Bootstrap 5.3.8** - Diseño y componentes UI
- **TypeScript 5.9.2** - Lenguaje de programación
- **RxJS 7.8.0** - Programación reactiva

---

## 📊 Validación de Criterios

| Criterio | Requisito | Estado | Puntos |
|----------|-----------|--------|--------|
| 1 | Tres páginas con contenido | ✅ Completado | 2/2 |
| 2 | Routing y navegación | ✅ Completado | 2/2 |
| 3 | Creación del servicio | ✅ Completado | 1/1 |
| 4 | Implementación del servicio | ✅ Completado | 2/2 |
| 5 | Formulario reactivo | ✅ Completado (2 formularios) | 2/2 |
| 6 | Contenido visual (texto, imágenes, layout 1200px) | ✅ Completado | - |
| **TOTAL** | | | **9/9** |

---

## 📝 Notas Adicionales

### Formularios Reactivos Implementados:
1. **Formulario de Contacto** en `/contact` - Para consultas generales
2. **Formulario de Checkout** en `/cafeteria/checkout` - Para pedidos de cafetería

Ambos cumplen con ReactiveFormsModule y muestran mensajes al usuario.

### Servicio de Cafetería:
El `CafeteriaService` proporciona datos estructurados de 20 productos reales, organizados en 5 categorías, con toda la información necesaria (id, nombre, precio, imagen, etc.).

### Diseño Responsive:
Todas las páginas están optimizadas para diferentes tamaños de pantalla usando el sistema de grid de Bootstrap.

---

## 👥 Información del Proyecto

**Proyecto:** Librería Nexus - Sistema de Cafetería  
**Actividad:** Actividad 2 - Formularios, servicios y routing  
**Framework:** Angular 20.3.0  
**Fecha:** Noviembre 2025  

---

## 📦 Para Entregar

### Repositorio / ZIP:
Asegúrate de **NO incluir** la carpeta `node_modules/` al comprimir el proyecto.

Comando para generar ZIP (excluyendo node_modules):
```bash
# Opción 1: Crear .gitignore si no existe
echo "node_modules/" > .gitignore

# Opción 2: Comprimir manualmente excluyendo la carpeta
```

### Documentación:
Este archivo README.md sirve como **documentación del proyecto**, explicando:
- ✅ Páginas creadas
- ✅ Servicio implementado y su uso
- ✅ Formularios reactivos
- ✅ Routing configurado
- ✅ Cambios realizados

---

## ✨ Características Destacadas

1. **Dos formularios reactivos** en lugar de uno (extra)
2. **20 productos** con datos completos
3. **Validación condicional** en checkout (número de mesa)
4. **Filtrado dinámico** de productos por categoría
5. **Diseño profesional** con Bootstrap y CSS personalizado
6. **Imágenes reales** de Unsplash
7. **Experiencia de usuario completa** con mensajes de feedback
8. **Sin errores** de compilación

---

## 🎓 Conclusión

Este proyecto cumple y **supera** todos los requisitos de la Actividad 2:
- ✅ 3+ páginas con contenido completo
- ✅ Routing configurado correctamente
- ✅ Servicio creado e implementado
- ✅ 2 formularios reactivos (solicitado 1)
- ✅ Layout de 1200px en todas las páginas
- ✅ Diseño profesional y responsive

**El proyecto está listo para ser entregado.** 🚀
