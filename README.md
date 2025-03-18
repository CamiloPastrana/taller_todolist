Aplicación Ionic Angular con Firebase / Firestore
Este repositorio contiene una aplicación desarrollada con Ionic Angular, utilizando Firebase como backend para gestionar el almacenamiento de datos en Firestore.

🚀 Requisitos Previos
Asegúrate de tener los siguientes elementos instalados antes de comenzar:

Node.js (se recomienda la versión LTS)
Angular CLI
Ionic CLI
Firebase
📦 Instalación
Clona el repositorio y entra en el directorio del proyecto:

sh
Copiar
git clone [https://github.com/usuario/proyecto-ionic.git](https://github.com/Wilker436/to-do-app.git)
cd Taller-1-Firebase
npm install
🔥 Configuración de Firebase
Accede a la consola de Firebase y crea un nuevo proyecto.

Activa Firestore en la configuración del proyecto.
Añade una aplicación web y copia la configuración de Firebase.
Crea el archivo src/environments/environment.ts e inserta la configuración de la siguiente manera:
sh
Copiar
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAnF7hnzeHgaA7syFbPYppcR6NvEyXM4QI",
    authDomain: "taller1-mobile.firebaseapp.com",
    projectId: "taller1-mobile",
    storageBucket: "taller1-mobile.firebasestorage.app",
    messagingSenderId: "791891563911",
    appId: "1:791891563911:web:2ca02ef585b6cad2296f22"
  }
};
Instala las dependencias de Firebase y AngularFire en el proyecto:
sh
Copiar
npm install firebase @angular/fire
