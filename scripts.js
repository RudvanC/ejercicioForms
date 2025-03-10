// Función para mostrar u ocultar el campo de dirección
function mostrarOcultarDireccion() {
    let pais = document.getElementById("pais").value;
    let direccionDiv = document.getElementById("direccionDiv");

    if (pais === "EEUU" || pais === "Canada") {
        direccionDiv.style.display = "block"; // Muestra el campo de dirección
    } else {
        direccionDiv.style.display = "none"; // Oculta el campo de dirección
    }
}

// Función para actualizar el prefijo telefónico según el país seleccionado
function actualizarPrefijoTelefonico() {
    let pais = document.getElementById("pais").value;
    let prefijoInput = document.getElementById("prefijo");

    // Asignar el prefijo según el país
    switch (pais) {
        case "EEUU":
        case "Canada":
            prefijoInput.value = "+1";
            break;
        case "Mexico":
            prefijoInput.value = "+52";
            break;
        case "España":
            prefijoInput.value = "+34";
            break;
        default:
            prefijoInput.value = "";
    }

    // Mostrar u ocultar el campo de dirección
    mostrarOcultarDireccion();
}
































