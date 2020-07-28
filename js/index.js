console.log("Hello my banking app");
// DECLARACIÓN DE VARIABLES
let nombreUsuario = "John Flórez";
let saldoEnCuenta = 5000;
let limiteExtraccion = 500;
let claveCorrecta = 1234;
//console.log("clave correcta " + typeof claveCorrecta);
// SE DEFINE LA FUNCIÓN PARA INICIAR SESIÓN
function iniciarSesion() {
    var clave = parseInt(
        prompt("Por favor ingrese su clave para iniciar sesión"),
        0
    );
    //console.log(typeof clave);
    // 1234 == "1234" -> true
    // 1234 === "1234" -> false
    if (clave === claveCorrecta) {
        alert("Bienvenido/a " + nombreUsuario + " a tu Home Banking");
        document.body.style.display = "block";
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    } else {
        saldoEnCuenta = 0;
        alert("Clave incorrecta. le quitamos toda su platica :(");
    }
}
//Función para poder cargar el nombre en pantalla
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Hello hello " + nombreUsuario;
}

//actualizar saldo en pantalla
function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$ " + saldoEnCuenta;
}

//Funcion flecha limite en pantalla --- =>
const actualizarLimiteEnPantalla = () => {
    document.getElementById("limite-extraccion").innerHTML =
        "Tu límite de extracción es: $ " + limiteExtraccion;
};

//INVOCAR LA FUNCIÓN INICIAR SESIÓN
iniciarSesion();

//Acciones en la aplicacion
//Cambiar limite de Extraccion


function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(
        prompt("Ingrese su nuevo límite de extracción"),
        0
    );
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert(
        "Pum pum!! Se ha actualizado tu límite de extracción, nuevo valor " +
        limiteExtraccion
    );
}