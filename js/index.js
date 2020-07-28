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
        saldoEnPantalla();
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
function saldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$ " + saldoEnCuenta;
}
//INVOCAR LA FUNCIÓN INICIAR SESIÓN
iniciarSesion();