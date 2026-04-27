# 🛒 Backend E-commerce - Entrega Final

Este es el proyecto final para el curso de Backend de Coderhouse. Consiste en una API REST robusta construida con **Node.js** y **Express**, utilizando **MongoDB** como base de datos principal y **WebSockets** para actualizaciones en tiempo real.

---

## 📄 Presentación del Proyecto
Para una explicación detallada de la arquitectura, capturas de funcionamiento y lógica implementada, puedes ver la presentación oficial aquí:
👉https://docs.google.com/presentation/d/1NTFQJGlAvh4CMtE-n6JlAHEHaNTayYBTT16FEaPogH0/edit?usp=sharing

---

## 🛠️ Tecnologías Utilizadas

*   **Node.js** & **Express** (Servidor y Ruteo)
*   **MongoDB Atlas** & **Mongoose** (Persistencia y Modelado)
*   **Handlebars** (Motor de Plantillas)
*   **Socket.io** (Comunicación en Tiempo Real)
*   **Mongoose Paginate V2** (Paginación avanzada)
*   **CSS Moderno** (Diseño de interfaz con Grids y Cards)

---

## 📁 Estructura del Proyecto

El proyecto sigue una arquitectura modular para facilitar el mantenimiento y la escalabilidad:

*   `src/dao/`: Manejo de la persistencia de datos (FileSystem y MongoDB).
*   `src/models/`: Esquemas de Mongoose para Productos y Carritos.
*   `src/routes/`: Definición de endpoints de la API y rutas de vistas.
*   `src/views/`: Plantillas Handlebars para el frontend.
*   `src/public/`: Archivos estáticos (CSS, imágenes, JS de cliente).

---

## 🚀 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com
   cd backend-I
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor:**
   ```bash
   npm start
   ```
   *El servidor correrá por defecto en el puerto 8080.*

---

## 🔌 Endpoints Principales

### Productos (`/api/products`)
*   `GET /`: Listado paginado con filtros (limit, page, sort, query).
*   `GET /:pid`: Detalle de un producto específico.
*   `POST /`: Creación de un nuevo producto.
*   `PUT /:pid`: Actualización de un producto.
*   `DELETE /:pid`: Eliminación de un producto.

### Carritos (`/api/carts`)
*   `POST /`: Crear un nuevo carrito.
*   `GET /:cid`: Listar productos del carrito (con **Populate**).
*   `POST /:cid/product/:pid`: Agregar o incrementar cantidad de un producto.
*   `DELETE /:cid/product/:pid`: Eliminar producto del carrito.
*   `DELETE /:cid`: Vaciar carrito completo.

---

## 🖼️ Vistas (Frontend)
*   `/products`: Catálogo visual con tarjetas y paginación.
*   `/realtimeproducts`: Gestión de productos con actualización automática vía WebSockets.

---

## 👤 Autor
*   **Ivana Vega** - *Desarrollo Backend* 
