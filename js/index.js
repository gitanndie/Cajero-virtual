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

//Depositar Dinero
function depositarDinero() {
    var cantidad = parseInt(
        prompt("ingresar la cantidad a depositar"), 0
    );
    if(isNaN(cantidad)) {
        return alert("Ingrese solo numeros");
    } else if (cantidad < 0) {
        return alert ("ups te robo platica");
    }
    saldoEnCuenta += cantidad;
    actualizarSaldoEnPantalla();
    alert("su nuevo saldo es:" + saldoEnCuenta);
}

//Extraer Dinero
function extraerDinero() {
    var extraerDinero = parseInt(
        prompt("Ingrese cuanto dinero quiere extraer"),
        0
    );

    if (extraerDinero > saldoEnCuenta) {
        alert("No puedes retirar ese valor")
    } else if (extraerDinero > saldoEnCuenta) {
        alert("No puede exceder el limite de extraccion")
    } else if (extraerDinero < saldoEnCuenta) {
        alert("Tu dinero ha sido retirado con exito")
        saldoEnCuenta = saldoEnCuenta - extraerDinero;
        actualizarLimiteEnPantalla();
    } else {
        alert("Error! digite un valor correcto");
    }
    actualizarSaldoEnPantalla();
    alert("su nuevo saldo es:" + saldoEnCuenta);
    
}

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