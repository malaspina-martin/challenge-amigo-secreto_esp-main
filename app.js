let amigos = [];

function validaNombre(codigo) {    
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(codigo);  
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();  

    if (nombreAmigo !== "") {   
        if (validaNombre(nombreAmigo)) {   
            amigos.push(nombreAmigo);
        } else {
            alert("Introdujo un Nombre Inválido!");  
        }
    } else {
        alert("Por favor, inserte un Nombre!");  
    }
    
    agregarLista(amigos);
    limpiarCaja();     
}

function limpiarCaja() {    
    document.getElementById('amigo').value = '';  
}   

function agregarLista(lista) {
    listaAmigos.innerHTML = "";     
    resultado.innerHTML = "";       

    for (let i = 0; i < lista.length; i++) {        
        let nombreAgregado = lista[i];     

        if (nombreAgregado !== "") {
            let lista = document.getElementById("listaAmigos"); 
            let li = document.createElement("li");              
            li.textContent = nombreAgregado;                   
            lista.appendChild(li);                             
        }
    }
}

function sortearAmigo() {
    let numeroGenerado = 0;
    
    if (amigos.length !== 0) {           
        numeroGenerado = getRandomInt(amigos.length);
        let nombreSorteado = amigos[numeroGenerado];
        let lista = document.getElementById("resultado");   
        lista.innerHTML = "El Amigo Secreto Sorteado es: " + nombreSorteado;   
        listaAmigos.innerHTML = "";   
    } else {    
        resultado.innerHTML = "No hay Amigos para Sortear!";   
    } 
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}