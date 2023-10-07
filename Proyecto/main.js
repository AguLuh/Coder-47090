// Tasa de cambio: 1 peso = 0.0258379 dólares (por ejemplo)
let tasaDeCambio = 0.0258379;
let pesos = 1;

// Función para convertir pesos a dólares
function convertirPesosADolares(pesos) {
    let dolares = pesos * tasaDeCambio;
    return dolares;
}

// Solicita al usuario ingresar la cantidad de pesos
let cantidadPesos = Number(prompt("Ingresa la cantidad de pesos a convertir a dólares:"));

// Verifica si la entrada es un número válido
if (!isNaN(cantidadPesos)) {
  // Llama a la función para realizar la conversión
    let cantidadDolares = convertirPesosADolares(cantidadPesos);

  // Muestra el resultado en la consola
    alert(cantidadPesos + " pesos equivalen a " + cantidadDolares.toFixed(2) + " dólares.");
} else {
  // Si la entrada no es válida, muestra un mensaje de error
    alert("Por favor, ingresa una cantidad válida de pesos.");
}



// Generar un número aleatorio entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializar variables
let intentos = 0;
let adivinanza = false;

// Juego
while (!adivinanza) {
  // Solicitar al jugador que ingrese un número
    let numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));

  // Verificar si el número ingresado es válido
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
    alert("Por favor, ingresa un número válido entre 1 y 100.");
    } else {
    // Incrementar el contador de intentos
    intentos++;

    // Comprobar si el número ingresado es igual al número aleatorio
    if (numeroIngresado === numeroAleatorio) {
    adivinanza = true;
    alert("¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
    } else if (numeroIngresado < numeroAleatorio) {
    alert("El número es mayor. Intenta nuevamente.");
    } else {
    alert("El número es menor. Intenta nuevamente.");
    }
}
}
