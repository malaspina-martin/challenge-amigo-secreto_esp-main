# Challenge del Amigo Secreto.
_Bienvenido al repositorio de la Plataforma del Amigo Secreto._ 
_Si bien la Funcionalidad hasta el momento es limitada, nos encontramos trabajando tanto para extender la Plataforma como para mejorar sus Funcionalidades._
_Tanto si deseas formar parte del Equipo de Desarrollo, como si no, espero que la Experiencia sea de tu agrado._
## Comenzando con la introducción.
_Este Trabajo comenzó a partir del Desafio "Challenge Amigo Secreto",_
_el cuál me permitía poner a prueba y afianzar mis conocimientos, aplicando lo aprendido y fortaleciendo mis habilidades de programación._

_Mi Función aquí es actuar como Anfitrión y proporcionarte una descripción clara y detallada del propósito, estructura y uso del código desarrollado en el Repositorio._
_Si estás interasado en entender y trabajar con este código, estas en el lugar adecuado._

_A continuación te brindo información sobre la instalación, dependencias, cómo ejecutar el proyecto, y posibles problemas o soluciones._

_Aquí encontrarás toda la información referente al uso de la plataforma._
### Paso 1:
_Iniciar GIT BASH en la carpeta en donde se clonará el Repositorio Remoto de la nube._

### Paso Alternativo:
_Si no has usado anteriormente GitHub, deberás Introducir los siguientes Comandos:_
```
git config --global user.name "[nombre del usuario]"
```
```
git config --global user.email "[email del usuario]"
```
_No es necesario usar `"git init"` aqui porque iniciarías un Repositorio Local y Clonarías el Repositorio Remoto dentro._
### Paso 2: Clonar el repositorio remoto.
_Primero dirijase al Repositorio Remoto:_
```
https://github.com/NicoGallardo1986/ProyectoPracticas3ro
```
_Luego, dentro del proyecto, haga clic en el botón CODE y copie con el botón señalado. Antes debería haber aceptado la invitación._

<img width="500" alt="imagen" src="https://github.com/user-attachments/assets/c818bb73-8ca5-48d5-83d6-81d65b782c6f" />

<h4 align="center">Una vez clonado el repositorio, podrá trabajar con el script sql de la base de datos, ya sea para importar el que esté en la nube, con los avances del resto de sus compañeros, o bien para reemplazar con el nuevo script resultante de la exportación, una vez que haya hecho sus respectivos avances</h4>

### Paso 3: Sincronizar los Datos.
_Cuando tenga el nuevo script sql de la base de datos (luego de Realizar las modificaciones), coloque éste dentro de la carpeta del Repositorio Local, REEMPLAZANDO LA VERSIÓN ANTERIOR, y con Git Bash (ejecutado dentro de la Carpeta) deberá sincronizar con el respositorio en la nube._
_Los comandos a utilizar para subir cambios serán:_

``` 
Git add .
```
_O bien…_   
``` 
git add “[Nombre del Archivo Exportado]”
```
_seguido de:_
```
Git commit -m “comentario significativo”
```
```
Git push
```
_Ahora, para verificar los cambios, vuelva a la pagina del Repositorio Remoto y controle que figuren las modificaciones._

<h4 align="center">Con esto, quedaría resuelta esta Etapa Individual del Trabajo Colaborativo!</h4>

_En caso de necesitarlo, el comando a utilizar para traer cambios desde el repositorio remoto en la nube será:_
```
Git pull
```
