document.addEventListener("DOMContentLoaded",cargarEventos);
function cargarEventos() {
    let btnPresentar= document.getElementById("btnPresentar");
    btnPresentar.addEventListener("click",solicitarPersonaje);

    let divs=document.getElementById("cajas").getElementsByTagName("div");
    for (let index = 0; index < divs.length; index++) {
        divs[index].addEventListener("click",
        function(){
            if(this.hasAttribute('title'))
            {
                this.removeAttribute("title"); 
                spanTag.innerHTML="";
            }
            else
            {
                completarNombrePersonaje(this.id);
            }
        });
    }  
}

console.log("-------DESAFIO N° 9-------");
console.log("------FERRARINI ENZO------");

let spanTag=document.getElementsByTagName("h1")[0].children[0];
//Descomentar la siguiente linea, para ejecutar los primeros puntos del desafío.
//solicitarPersonaje();

function solicitarPersonaje(){
    let personaje=prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    if(personaje)
    {
        console.log(`Personaje que se presenta: 🌟${personaje.toUpperCase()}🌟`);
        completarNombrePersonaje(personaje);
        //Descomentar para ver resultados antes del BONUS.
        // let btnPresentar= document.getElementById("btnPresentar");
        // btnPresentar.style= "display:none";
    }
}

function completarNombrePersonaje(personaje){    
    let nombreCompleto="(desconocido)";
    let idBusqueda="";
    let personajeEncontrado=false;
    personaje=personaje.trim();
    switch (personaje.toUpperCase()) {
        case "MARIO":     
            nombreCompleto="Mario";   
            personajeEncontrado=true;            
            break;
        case "LUIGI":  
            nombreCompleto="Luigi";
            personajeEncontrado=true;                 
            break;
        case "BOWSER":    
            nombreCompleto="Bowser Morton Koopa";  
            personajeEncontrado=true;        
            break;
        case "PEACH":     
            nombreCompleto="Princesa Peach Toadstool";
            personajeEncontrado=true;          
            break;
        case "YOSHI":
            nombreCompleto="T. Yoshisaur Munchakoopas";
            personajeEncontrado=true;                  
            break;
        case "TOAD":
            nombreCompleto="Toad";  
            personajeEncontrado=true;            
            break;
        case "TOADETTE":
            nombreCompleto="Toadette";     
            personajeEncontrado=true;            
            break;
        case "DAISY":
            nombreCompleto="Princesa Daisy";   
            personajeEncontrado=true;                
            break;   
    }
    
    if(personajeEncontrado)
    {        
        ocultarPersonajes();
        idBusqueda=personaje.toLowerCase(); 
        let divElement= document.getElementById(idBusqueda);
        divElement.setAttribute("title", "Presentado");
        spanTag.innerHTML=nombreCompleto;
    }
    else
    {
        if(!hayPersonajeAnteriorSeleccionado())
        {
            spanTag.innerHTML=nombreCompleto;
        }
    }
}

function ocultarPersonajes(){
    let divs=document.getElementById("cajas").getElementsByTagName("div");
    for (let index = 0; index < divs.length; index++) {
        divs[index].removeAttribute("title");        
    }  
}

function hayPersonajeAnteriorSeleccionado(){
    let divs=document.getElementById("cajas").getElementsByTagName("div");
    let hayAtributo=false;
    for (let index = 0; index < divs.length; index++) {
        if(divs[index].hasAttribute('title')){
            hayAtributo=true;
            break; 
        }            
    }  
    return hayAtributo;
}
   
