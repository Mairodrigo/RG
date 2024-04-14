//Aqui el cliente iniciaría la sesion con el usuario asignado por la empresa y la password. Si no es un cliente registrado, no podrá pedir presupuesto a traves del carrito.
let clienteDeAlta = "Liga";
let passCliente = "123456";

let usuario = prompt("Ingrese su usuario para acceder al sistema");
let password = prompt("Ingrese la contraseña");

if (usuario == clienteDeAlta && password === passCliente) {
	alert("Bienvenido!");
} else {
	alert(
		"Veras el sitio completo unicamente si es un cliente registrado. Mas información contactanos al 1122334455"
	);
}

//Carrito


