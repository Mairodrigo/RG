//Aqui el cliente iniciaría la sesion con el usuario asignado por la empresa y la password. Si no es un cliente registrado, no podrá pedir presupuesto a traves del carrito.
/* let clienteDeAlta = "Liga";
let passCliente = "123456";

let usuario = prompt("Ingrese su usuario para acceder al sistema");
let password = prompt("Ingrese la contraseña");

if (usuario == clienteDeAlta && password === passCliente) {
	alert("Bienvenido " + clienteDeAlta + " !");
} else {
	alert(
		"Veras el sitio completo unicamente si es un cliente registrado. Mas información contactanos al 1122334455"
	);
} */

//Carrito
const productos = [
	{ nombre: "economizador", precio: 10000 },
	{ nombre: "miniequipo", precio: 150000 },
	{ nombre: "picos", precio: 8000 },
];

let carrito = [];

let seleccion = prompt("Desea iniciar su pedido?");
while (seleccion != "si" && seleccion != "no") {
	alert("Por favor, ingrese si o no");
	seleccion = prompt("Desea iniciar su pedido si o no?");
}
if (seleccion == "si") {
	alert("A continuacion tendrá nuestra lista de productos");
	console.log(productos);
} else {
	alert("OK! Esperamos que le guste nuestro sitio");
}

function agregarAlCarrito(producto, precio) {
	carrito.push({ producto, precio });
	alert('"${producto}" se agregó a su pedido');
}
