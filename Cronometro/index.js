let tablero = document.getElementById("tablero");
let boton_play = document.getElementById("boton_play");
let boton_pause = document.getElementById("boton_pause");
let boton_reset = document.getElementById("boton_reset");

// Estado inicial del cronómetro
let esta_activo = false;
let time = {
    decimas: 0,
    segundos: 0,
    minutos: 0
};

// Función para dar formato al número
function formato(numero) {
    return numero < 10 ? "0" + numero : numero;
}

// Función para actualizar el cronómetro
function actualizar() {
    time.decimas++;
    if (time.decimas === 10) {
        time.decimas = 0;
        time.segundos++;
    }
    if (time.segundos === 60) {
        time.segundos = 0;
        time.minutos++;
    }

    tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}`;

    // Si el cronómetro sigue activo, vuelve a llamar a la función
    if (esta_activo) {
        setTimeout(actualizar, 100); // Llamada cada 100 milisegundos
    }
}

// Función para iniciar el cronómetro
function play() {
    if (!esta_activo) {
        esta_activo = true;  // Cambia el estado a activo
        actualizar();  // Comienza la actualización del cronómetro
        console.log("Cronómetro iniciado");  // Mensaje de depuración
    }
}

// Función para pausar el cronómetro
function pause() {
    esta_activo = false;  // Cambia el estado a inactivo
    console.log("Cronómetro pausado");  // Mensaje de depuración
}

// Función para reiniciar el cronómetro
function reset() {
    esta_activo = false;  // Detiene el cronómetro
    time.decimas = 0;
    time.segundos = 0;
    time.minutos = 0;
    tablero.innerHTML = "00:00:0";  // Reinicia el tablero
    console.log("Cronómetro reiniciado");  // Mensaje de depuración
}

// Asignación de los eventos a los botones
boton_play.addEventListener('click', play);
boton_pause.addEventListener('click', pause); // Corregido: se añadió la función pause
boton_reset.addEventListener('click', reset);