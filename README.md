# chatEx

_Aplicacion con ionic y firebase que simula un chat con inicio de sesión._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

git clone https://github.com/ElizabethCh08/chatEx.git 

nd add @angular/fire_


## Funciones importantes ⚙️

### services / chat.service.ts
createUserWithEmailAndPassword: Crea una cuenta de usuario dentro de firebase

onAuthStateChanged: Detecta cualquier cambio que se realice con el usuario autenticado

addChatMessage: Agrega un nuevo mensaje a una colección de mensajes

getChatMessages: Obtiene un observable de los mensajes

getUsers: Función auxiliar para obtener todos los usuarios

getUserForMsg: Función auxiliar para encontrar el nombre de usuario (correo electrónico) en función de su UID

### login.page.ts
signUp: Función asíncrona para el registro de nuevos usuarios

singIn: Función asíncrona para el inicio de sesión de usuarios registrados


## Construido con 🛠️

* [Angular](https://angular.io/docs) - El framework web usado
* [Firebase](https://firebase.google.com/docs) - Plataforma movil
* [Ionic](https://ionicframework.com/docs) - Kit de desarrollo

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en (https://devdactic.com/ionic-firebase-chat/)


## Autores ✒️

* **Karla Elizabeth** - *Trabajo Inicial, Documentación* 


* Con ❤️ Gracias 🤓.


