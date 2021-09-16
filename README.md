# README.MD

## Programmer
Iñigo Montánchez Crespo

## Repository
(https://github.com/imc89/Timer_App)

## About
Este proyecto es un contador por el cual el usuario al introducir los datos correctamente podrá ver un temporizador. Cuando el usuario
pulse el botón de "Logout" se guardará el tiempo registrado por el temporizador volviendo a la pantalla de Login.
El proyecto está realizado con Lit-Element. Se ha usado para la generación del proyecto Open-WC, también se ha usado @vaadin/router para gestionar el route entre las diferentes páginas de la aplicación.

## Structure
Se ha dividido el proyecto en dos pages:
* login-page.js -> Page que se ocupará de mostrar la pantalla de Login.
* timer-page.js -> Page que se ocupará de mostrar la pantalla del temporizador.

A su vez se han utilizado diferentes componentes:
* app-button.js -> Botón que se utilizará en ambas pages.
* app-inputs.js -> Input que se utilizará tanto para el campo del email como del password.
* app-timer.js -> Temporizador que se utilizará en la page timer-page.js.

## Installation
Servirá con clonar el repositorio de Github y desde la terminal lanzar los comandos:
* npm i -> para instalar las dependencias.
* npm run start -> para correr la aplicación.

## Notes
Los datos se administrarán a través de los siguientes métodos:
* Los datos de usuario se encuentran en el archivo user.json dentro de la carpeta mock y se leen a través de un fetch.
* El dato del tiempo se guarda a través del localStorage del navegador. 
Para visualizarlo habrá que entrar en el inspector del navegador -> Application -> Storage -> LocalStorage

