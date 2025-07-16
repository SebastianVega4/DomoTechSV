# 🏠💻 DomoTechSV — Plataforma Principal de Mi Emprendimiento Tecnológico

[![Angular](https://img.shields.io/badge/Built%20with-Angular%2020-red?style=for-the-badge&logo=angular)](https://angular.io/)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-yellow?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Status](https://img.shields.io/badge/Estado-Activo-brightgreen?style=for-the-badge)]()
[![License](https://img.shields.io/badge/Licencia-GPL%203.0-blue?style=for-the-badge)](https://www.gnu.org/licenses/gpl-3.0.html)

## 🌟 Descripción General

**DomoTechSV** es la página principal de mi emprendimiento tecnológico personal, fundado en 2023, con el propósito de ofrecer soluciones digitales personalizadas, productos tecnológicos innovadores y presencia de marca en línea.

Esta plataforma web actúa como vitrina virtual de los productos ofrecidos, clasificados por nicho y categoría, y permite al administrador gestionar el inventario directamente desde Firebase. La aplicación fue desarrollada usando **Angular 20** y utiliza **Firebase Firestore** como base de datos, lo que garantiza un rendimiento ágil y una integración directa con servicios en la nube.

## 🛒Funcionalidades Clave

- 📦 **Catálogo de productos dinámico**:
  - Filtrado por nicho y categoría.
  - Identificación de productos destacados.
- 🔎 **Detalle de producto**:
  - Vista individual con información detallada de cada ítem.
- 🔐 **Autenticación**:
  - Ingreso de administrador mediante Firebase Auth.
- 🧠 **Panel administrativo básico**:
  - Agregar, actualizar y eliminar productos en tiempo real.
- ⚙️ **Configuración global**:
  - Servicio dedicado a cargar configuraciones generales desde Firestore.

## 💻 Tecnologías Utilizadas

- **Framework**: Angular 20
- **Base de datos**: Firebase Firestore
- **Autenticación**: Firebase Auth
- **Lenguaje**: TypeScript, HTML5, SCSS
- **Testing**: Angular TestBed
- **Hosting (previsto)**: Firebase Hosting

## 📂 Estructura del Repositorio

```
DomoTechSV/
│
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   ├── product.ts           # Gestión de productos en Firestore
│   │   │   ├── config.ts            # Configuración global desde Firebase
│   │   │   └── auth.ts              # Autenticación básica con Firebase Auth
│   │   └── components/              # Componentes de UI de la tienda
│   ├── environments/                # Configuración por entorno
│   └── assets/                      # Logos, estilos, imágenes
│
├── tests/
│   └── product.spec.ts              # Pruebas unitarias del servicio de productos
│
├── .gitignore
└── README.md
```

## 🚀 Instrucciones de Ejecución

### Requisitos

- Node.js
- Angular CLI
- Firebase CLI (si se va a usar Hosting)

### Pasos

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/SebastianVega4/DomoTechSV.git
   cd DomoTechSV
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar Firebase**:
   Asegúrate de tener configurado el archivo \`environment.ts\` con tu proyecto Firebase:
   ```ts
   export const environment = {
     production: false,
     firebaseConfig: {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_BUCKET",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
     }
   };
   ```

4. **Ejecutar la aplicación**:
   ```bash
   ng serve
   ```

5. **Abrir en navegador**:
   Navega a \`http://localhost:4200\`

---

## 👨‍💼 Autor

Desarrollado por **Sebastián Vega**  
📧 *Sebastian.vegar2015@gmail.com*  
🔗 [LinkedIn - Johan Sebastián Vega Ruiz](https://www.linkedin.com/in/johan-sebastian-vega-ruiz-b1292011b/)

---

## 📜 Licencia

Este proyecto está bajo la licencia **GPL 3.0**.

**Permisos:**

- Uso comercial
- Modificación
- Distribución
- Uso privado

---

**🏢 Proyecto Personal — DomoTechSV**  
Tecnología hecha en casa, con visión de futuro.  
📍 Sogamoso, Boyacá — Colombia

© 2025 — Sebastián Vega
