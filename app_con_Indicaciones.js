//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
//Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//Debo desarrollar una función, que permita al usuario ingresar un nombre en el campo de texto 
//y añadirlo a la lista de amigos creada anteriormente.

//Ahora agrego la Fn de Validación de Nombres
function validaNombre(codigo) {    
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(codigo);  //Permite letras, ñ, acentos y espacios
}

//Desarrollo la Fn q lee el campo de texto y agrega el Nombre a la variable amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();  //tomo el Nombre y limpio espacios

    if (nombreAmigo !== "") {   //Valido que el Nombre no esté vacío!
        if (validaNombre(nombreAmigo)) {   //llamo a la Fn de Validación
            amigos.push(nombreAmigo);
        } else {
            alert("Introdujo un Nombre Inválido!");  //Muestro la Alerta en Pantalla!
        }
    } else {
        alert("Por favor, inserte un Nombre!");  
    }

    //console.log(amigos);            //x ahora lo muestro en consola p/controlar el Funcionamiento
    //console.log(amigos.length);    

    agregarLista(amigos);
    limpiarCaja();  //limpio la caja de texto    
}

//al Final agrego la Fn p/Limpiar el Campo de Entrada.
function limpiarCaja() {    
    document.getElementById('amigo').value = '';  
}   

//Ahora debo Implementar una función para actualizar la lista de amigos
//Crear una Fn que recorra el array amigos y agregue c/nombre como un elemento <li> dentro de una lista HTML. 
//Usando innerHTML para limpiar la lista antes de agregar nuevos elementos.

function agregarLista(lista) {
    listaAmigos.innerHTML = "";     //2° Limpio la Lista Existente (fuera del For!)
    //tmb Limpio la Lista resultado, en el caso de que se haya Sorteado la Lista vacia!
    resultado.innerHTML = "";       //No está Indicado como Requerimiento en el tablero de Trello!

    //3° Itero sobre el Arreglo [amigos] -> elementos de lista (<li>) para cada título.
    for (let i = 0; i < lista.length; i++) {        
        let nombreAgregado = lista[i];     //1° Obtengo el Elemento de la Lista

        //4° Agrego Elementos a la Lista, si verifican no ser Nulos! 
        if (nombreAgregado !== "") {
            let lista = document.getElementById("listaAmigos"); //hago la referencia al <ul>
            let li = document.createElement("li");              //creo un <li>
            li.textContent = nombreAgregado;                    //asigno el texto
            lista.appendChild(li);                              //lo agrego al <ul>
        }
    }
}

//Implementar una función para sortear los amigos

//Escribir una Fn que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
//Usando Math.random() y Math.floor() para obtener un índice aleatorio.

function sortearAmigo() {
    let numeroGenerado = 0;
    //1° Valido que haya amigos disponibles, antes de sortear.
    if (amigos.length !== 0) {           
        numeroGenerado = getRandomInt(amigos.length);
        //3° Obtengo el nombre sorteado, utilizar el índice aleatorio en el Arreglo.
        let nombreSorteado = amigos[numeroGenerado];
        //console.log("El Amigo Sorteado es: ", nombreSorteado);  //lo muestro en Consola p/verificar!

        //4° Muestro el resultado, utilizando document.getElementById()  
        // e innerHTML para mostrar el amigo sorteado.
        let lista = document.getElementById("resultado");   // referencia al <ul>
        lista.innerHTML = "El Amigo Secreto Sorteado es: " + nombreSorteado;   //Reemplazo el Contenido de la Lista

        listaAmigos.innerHTML = "";   //No está Indicado como Requerimiento en el tablero de Trello, 
        // pero si está mostrada la Funcionalidad en el Video de Presentación.        
    } else {    //en caso de Lista vacia
        //console.log("No hay Amigos para Sortear!");  //lo muestro en Consola p/verificar
        resultado.innerHTML = "No hay Amigos para Sortear!";   //Reemplazo el Contenido de la Lista
    } 
}

//2° Genero un índice aleatorio del Arreglo, Usando Math.random() y Math.floor().
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}