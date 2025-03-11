document.addEventListener("DOMContentLoaded", function () {
    // Elementos del formulario
    let paisSelect = document.getElementById("pais");
    let prefijoInput = document.getElementById("prefijo");
    let telefonoInput = document.getElementById("telefono");
    let direccionDiv = document.getElementById("direccionDiv");
    let formulario = document.querySelector("form");
    let emailInput = document.getElementById("email");

    // Expresión regular para validar dominios permitidos en correos
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com|hotmail\.com|icloud\.com)$/;

    // Aplicar estilos al hacer focus en inputs, selects y textarea
    const inputs = document.querySelectorAll("input, select, textarea");

    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            this.style.border = "5px solid #005500"; // Borde azul al enfocar
        });

        input.addEventListener("blur", function () {
            this.style.border = ""; // Restaura el borde original al perder el foco
        });
    });

    // Validación de email con dominios específicos
    emailInput.addEventListener("input", function () {
        this.style.border = ""; // Restablecer borde si el usuario vuelve a escribir
    });

    emailInput.addEventListener("blur", function () {
        if (!emailRegex.test(this.value) && this.value !== "") {
            alert("Por favor, ingresa un correo con un dominio válido (gmail, outlook, yahoo, hotmail, icloud).");
            this.style.border = "2px solid red"; // Resalta el input con rojo
        }
    });

    // Función para actualizar el prefijo telefónico según el país seleccionado
    function actualizarPrefijoTelefonico() {
        let pais = paisSelect.value;

        // Mostrar y ocultar campo de dirección dependiendo del país
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
    }

    // Evento para cambiar el prefijo cuando se selecciona un país
    paisSelect.addEventListener("change", actualizarPrefijoTelefonico);

    // Evento para validar el número de teléfono (solo números)
    telefonoInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, ""); // Elimina cualquier carácter que no sea número
    });

    // Evento que se ejecuta cuando el usuario envía el formulario
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
