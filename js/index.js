
let carrito = [];

productos.forEach((product) => {
	let content = document.createElement("div");
	content.className = "card";
	content.innerHTML = `
	<img class= productoImg src ="${product.img}">
	<h3 class="nombreProducto">${product.nombre}</h3>
	<p class="precioProducto">$ ${product.precio}</p>
	`;

	shopContent.append(content);

	let comprar = document.createElement ("button");
	comprar.innerText = "COMPRAR";
	comprar.className = "comprar";

	content.append(comprar);
});
