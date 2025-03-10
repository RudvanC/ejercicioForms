// Se activa cuando todo el HTML ha sido completamente 
// cargado y analizado por el navegador.
// Se usa para asegurarse de que los elementos del 
// DOM están disponibles antes de intentar manipularlos con JavaScript.
document.addEventListener("DOMContentLoaded", function () {
    // Elementos del formulario
    let paisSelect = document.getElementById("pais");
    let prefijoInput = document.getElementById("prefijo");
    let telefonoInput = document.getElementById("telefono");
    let direccionDiv = document.getElementById("direccionDiv");
    let formulario = document.querySelector("form");

    
    // Función para actualizar el prefijo telefónico según el país seleccionado
    function actualizarPrefijoTelefonico() {
        let pais = paisSelect.value;

        //Mostrar y ocultar campo de dirección dependiendo del país
        if (pais === "EEUU" || pais === "Canada") {
            direccionDiv.style.display = "block"; // Muestra el campo de dirección
        } else {
            direccionDiv.style.display = "none"; // Oculta el campo de dirección
        }

        // Asignar el prefijo según el país
        switch (pais) {
            case "EEUU":
            case "Canada":
                prefijoInput.value = "+1";
                break;
            case "Mexico":
                prefijoInput.value = "+52";
                break;
            case "Espana":
                prefijoInput.value = "+34";
                break;
            case "Argentina":
                prefijoInput.value = "+54";
                break;
            case "Colombia":
            prefijoInput.value = "+57";
                break;
            case "Venezuela":
            prefijoInput.value = "+58";
                break;
            default:
                prefijoInput.value = "";
        }

        // Mostrar u ocultar el campo de dirección
    }

    // Evento para cambiar el prefijo cuando se selecciona un país
        // Se dispara cuando el usuario selecciona un país en el <select id="pais">.
        // Llama a la función actualizarPrefijoTelefonico(), la cual:
        // Cambia automáticamente el prefijo telefónico según el país seleccionado.
        // Muestra u oculta el campo de dirección si el país es "EEUU" o "Canada
    paisSelect.addEventListener("change", actualizarPrefijoTelefonico);

    // Evento para validar el número de teléfono (solo números)
        // Se activa cada vez que el usuario escribe algo en el campo de teléfono.
        // Usa una expresión regular (\D) para eliminar cualquier carácter que no sea un número.
        // Esto evita que el usuario ingrese letras u otros símbolos.
    telefonoInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, ""); // Elimina cualquier caracter que no sea número
    });

    // Evento que se ejecuta cuando el usuario envía el formulario
        // Se dispara cuando el usuario presiona el botón "Registrarse" 
        // para enviar el formulario.
        // Compara las contraseñas ingresadas en los campos 
        // "Contraseña" y "Confirmar contraseña".
        // Si no coinciden, usa event.preventDefault(); 
        // para cancelar el envío del formulario y muestra un mensaje de alerta.
    formulario.addEventListener("submit", function (event) {
        let contrasena = document.getElementById("contraseña").value;
        let confirmarContrasena = document.getElementById("confirmar-contraseña").value;

        // Validación de contraseñas
        if (contrasena !== confirmarContrasena) {
            event.preventDefault(); // Evita que el formulario se envíe
            alert("Las contraseñas no coinciden.");
        }
    });
});
