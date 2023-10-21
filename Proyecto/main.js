// // Tasa de cambio: 1 peso = 0.0258379 dólares (por ejemplo)
// let tasaDeCambio = 0.0258379;
// let pesos = 1;

// // Función para convertir pesos a dólares
// function convertirPesosADolares(pesos) {
//     let dolares = pesos * tasaDeCambio;
//     return dolares;
// }

// // Solicita al usuario ingresar la cantidad de pesos
// let cantidadPesos = Number(prompt("Ingresa la cantidad de pesos a convertir a dólares:"));

// // Verifica si la entrada es un número válido
// if (!isNaN(cantidadPesos)) {
//   // Llama a la función para realizar la conversión
//     let cantidadDolares = convertirPesosADolares(cantidadPesos);

//   // Muestra el resultado en la consola
//     alert(cantidadPesos + " pesos equivalen a " + cantidadDolares.toFixed(2) + " dólares.");
// } else {
//   // Si la entrada no es válida, muestra un mensaje de error
//     alert("Por favor, ingresa una cantidad válida de pesos.");
// }



// // Generar un número aleatorio entre 1 y 100
// let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// // Inicializar variables
// let intentos = 0;
// let adivinanza = false;

// // Juego
// while (!adivinanza) {
//   // Solicitar al jugador que ingrese un número
//     let numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));

//   // Verificar si el número ingresado es válido
//     if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
//     alert("Por favor, ingresa un número válido entre 1 y 100.");
//     } else {
//     // Incrementar el contador de intentos
//     intentos++;

//     // Comprobar si el número ingresado es igual al número aleatorio
//     if (numeroIngresado === numeroAleatorio) {
//     adivinanza = true;
//     alert("¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
//     } else if (numeroIngresado < numeroAleatorio) {
//     alert("El número es mayor. Intenta nuevamente.");
//     } else {
//     alert("El número es menor. Intenta nuevamente.");
//     }
// }
// }


console.log("¡¡Bienvenido usuario!!")

console.log("Aquí se muetran la información de nuestros productos.")
class Elementos {
    constructor(producto, precioEnDolar, stock) {
        this.producto = producto;
        this.precioEnDolar = precioEnDolar;
    }
}

mesa = new Elementos("Mesa", 30);
silla = new Elementos("Silla", 20);
tv = new Elementos("Tv", 40);

const Elementos = [];
Elementos.push(mesa);
Elementos.push(silla);
Elementos.push(tv);


console.log(Elementos);

function filtrarPorPrecio() {
    const minPrecio = parseFloat(prompt("Ingrese precio mínimo (Entre 0 - 100)(Ej: 10):"));
    const maxPrecio = parseFloat(prompt("Ingrese precio máximo (Entre 0 - 100)(Ej: 40):"));

    const mercaderiasFiltradas = mercaderia.filter((producto) => {
        return producto.precioEnDolar >= minPrecio && producto.precioEnDolar <= maxPrecio;
    });

    console.log(mercaderiasFiltradas);
}

function infoMerc() {
    return console.log(mercaderia)
}

console.log("Comandos de la tienda.")
console.log("comprar() para iniciar su pedido.")
console.log("infoMerc() para la información de la mercadería.")
console.log("repetirComprar() para realizar la actividad de comprar() 5 veces.")
console.log("filtrarPorPrecio() para filtrar la mercadería por su precio deseado.") // Aquí agregue lo de arrays para la segunda pre entrega.
console.log("Este ejemplo solo contempla mercadería de entre 10 y 90 USD rangos más grandes o chicos son irrelevantes.")

filtrarPorPrecio()

class Producto {
    constructor(nombre, precio, impuestos, mesa, silla, tv) {
        this.nombre = nombre;
        this.precio = precio;
        this.mesa = mesa;
        this.silla = silla;
        this.tv = tv;
        this.impuestos = impuestos;
        this.importeFinal = this.calcularImporteFinal(mesa, silla, tv);
    }

    calcularImporteFinal(mesa, silla, tv) {
        let importeFinal = this.precio + this.impuestos;
        
        if (mesa === "si") {
            importeFinal += 30;
        }
        if (silla === "si") {
            importeFinal += 20;
        }
        if (tv === "si") {
            importeFinal += 40;
        }
        return importeFinal;
    }
}

function comprar() {
    // Solicitar al usuario los datos del producto
    let nombre = prompt("Ingrese su nombre:");
    let precio = parseFloat(prompt("Ingrese el precio de un producto (Ej: 1000):"));
    let impuestos = parseFloat(prompt("Ingrese el valor de los impuestos del producto (Ej: 1000):"));
    let mesa = prompt("¿Desea comprar una mesa? (si/no):");
    let silla = prompt("¿Desea comprar una silla? (si/no):");
    let tv = prompt("¿Desea comprar una TV? (si/no):");
    let dia = prompt("Día de la semana:")

    // Crearamos una nueva instancia de Producto
    let nuevoProducto = new Producto(nombre, precio, impuestos, mesa, silla, tv, dia);

    // Mostrar el recibo a pagar por el cliente
    console.log("¡¡Recibo a pagar!!");
    console.log(nuevoProducto);

    let descuento = 0;

    switch(dia.toLowerCase()) {
        case "lunes":
            console.log("El descuento del Lunes es: 20%");
            descuento = nuevoProducto.importeFinal * 0.2;
            break;
        case "martes":
            console.log("El descuento del Martes es: 10%");
            descuento = nuevoProducto.importeFinal * 0.1;
            break;
        case "miercoles":
            console.log("El descuento del Miércoles es: 15%");
            descuento = nuevoProducto.importeFinal * 0.15;
            break;
        case "jueves":
            console.log("El descuento del Jueves es: 40%");
            descuento = nuevoProducto.importeFinal * 0.4;
            break;
        case "viernes":
            console.log("El descuento del Viernes es: 25%");
            descuento = nuevoProducto.importeFinal * 0.25;
            break;
        default:
            console.log("El descuento del fin de semana es: 50%");
            descuento = nuevoProducto.importeFinal * 0.5;
            break;
    }

    let importeFinalConDescuento = nuevoProducto.importeFinal - descuento;
    console.log("Importe final: $" + importeFinalConDescuento);
}

comprar();

function repetirComprar() {
    for (let i = 0; i < 5; i++) {
    comprar();
    }
}