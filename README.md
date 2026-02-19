# 🏋️ Proyecto Registro — Registro de Entrenamientos

Aplicación web para el registro, edición y visualización de entrenamientos físicos en tiempo real. Desarrollada con **Vue 3 + TypeScript** e integrada con **Firebase Firestore** para el almacenamiento de datos.

🔗 **Demo en vivo:** [https://proyecto-registro-dc838.web.app](https://proyecto-registro-dc838.web.app)

---

## ✨ Funcionalidades

- Registrar entrenamientos con fecha, duración (minutos) y distancia (km)
- Editar o eliminar entrenamientos existentes
- Historial en tiempo real mediante `onSnapshot` de Firestore
- Visualización de registros en tarjetas (cards) ordenadas por fecha
- Tipado estático con TypeScript mediante interfaces definidas

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| Vue 3 + `<script setup>` | Framework frontend |
| TypeScript | Tipado estático |
| Firebase Firestore | Base de datos en tiempo real |
| Firebase Hosting | Despliegue de la aplicación |
| Vite | Bundler y servidor de desarrollo |

---

## 📁 Estructura del proyecto

```
proyecto-registro/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Entrenamiento.vue      # Tarjeta de cada entrenamiento
│   │   ├── Formulario.vue         # Formulario de registro de entrenamientos
│   │   └── ModalEdicion.vue       # Modal para editar un entrenamiento existente
│   ├── types/
│   │   └── Entrenamiento.ts       # Interfaz TypeScript del entrenamiento
│   ├── firebase.ts                # Configuración e inicialización de Firebase
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── dist/                          # Carpeta generada al compilar (npm run build)
├── .env                           # Crear la carpeta y añadir las variables de entorno para Firebase
├── .firebaserc
├── firebase.json
├── index.html
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── package.json
```

---

## ⚙️ Instalación y uso local

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/proyecto-registro.git
cd proyecto-registro
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables.

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
``` 

### 4. Ejecutar en modo desarrollo

```bash
npm run dev
```

---

## 🚀 Despliegue en Firebase Hosting

### 1. Construir la aplicación

```bash
npm run build
```

### 2. Desplegar

```bash
firebase deploy
``` 

---

## 👤 Autor

**Juan Esteban Rodriguez Castellanos**
