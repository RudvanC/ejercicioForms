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
