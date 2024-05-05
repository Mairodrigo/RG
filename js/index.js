const shopContent = document.getElementById ("shopContent");
const verCarrito = document.getElementById ("verCarrito");
const modalContainer = document.getElementById("modalContainer");

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

	let comprar = document.createElement("button");
	comprar.innerText = "COMPRAR";
	comprar.className = "comprar";

	content.append(comprar);

	comprar.addEventListener("click", () => {
		carrito.push({
			id: product.id,
			img: product.img,
			nombre: product.nombre,
			precio: product.precio,
		});
		console.log(carrito);
	});
});

verCarrito.addEventListener("click", () => {
	const modalHeader = document.createElement("div")
	modalHeader.className = "modal-header"
	modalHeader.innerHTML = `
	<h4 class="modal-header-title"> Carrito </h4>
	`;
	modalContainer.append(modalHeader);

	const modalButton = document.createElement ("h4");
	modalButton.innerText = "X";
	modalButton.className = "modal-header-button";
	modalHeader.append(modalButton);
});