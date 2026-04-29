function analizar(nombre) {
    const mensaje = document.getElementById('mensaje');
    const cuerpo = document.body; //al cambiar el cuerpo al seleccionar un personaje

    // 1. Comentario de inicio
    console.log("--- Iniciando selección ---");

    //variables que se pueden cambiar mas adelante
    let grito; //al seleccioanr aparece el texto de cada personaje
    let colorTexto; //color de texto
    let claseFondo; // cambia el fondo

    // CORRECCIÓN AQUÍ: Se añade 'bg-verde' a la lista para que se limpie correctamente
    cuerpo.classList.remove('bg-rojo', 'bg-cian', 'bg-blanco', 'bg-azul', 'bg-verde');

    switch (nombre) {
        case "Scorpion":
            grito = "Mi alma arde de venganza. ¡Ahora, arderás conmigo";
            colorTexto = "#ff4500";
            claseFondo = "bg-rojo"; 
            console.log("Seleccionado: Scorpion (Fuego)");
            break;

        case "Sub-Zero":
            grito = "Tu sangre se congelará antes de tocar el suelo";
            colorTexto = "#00ffff";
            claseFondo = "bg-cian"; 
            console.log("Seleccionado: Sub-Zero (Hielo)");
            break;

        case "Reptile":
            grito = "Puedo oler tu corazón latiendo... ¡Lo arrancaré y se lo ofreceré a mi Emperatriz! ";
            colorTexto = "#00ff00";
            claseFondo = "bg-verde"; 
            console.log("Seleccionado: Reptile (Almas)");
            break;
        
        case "Raiden":
            grito = "Los Dioses Antiguos exigen tu sumisión. ¡Te enfrentas a un Dios y caerás!";
            colorTexto = "#00ccff";
            claseFondo = "bg-azul"; 
            console.log("Seleccionado: Raiden (Rayo)");
            break;
        
        default:
            grito = "¡A pelear!";
            colorTexto = "#ffffff";
            console.log("Seleccionado: pelea ");
    }

    if (nombre !== "") {
        mensaje.innerText = nombre.toUpperCase() + " DICE: " + grito;
        mensaje.style.color = colorTexto;
        mensaje.style.textShadow = "0 0 20px " + colorTexto;
        
        // Aplicamos el Aura de Reino al fondo
        if (claseFondo) {
            cuerpo.classList.add(claseFondo);
        }

        console.log("Guerrero: " + nombre);
    } else {
        mensaje.innerText = "Selecciona un luchador";
        console.log("Error: Nombre vacío");
    }
    console.log("--- Proceso terminado ---");
}