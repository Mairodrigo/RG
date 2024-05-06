const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
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
	//funcionalidad del carrito
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
	modalContainer.innerHTML = "";
	modalContainer.style.display = "flex";
	const modalHeader = document.createElement("div");
	modalHeader.className = "modal-header";
	modalHeader.innerHTML = `
	<h4 class="modal-header-title"> Carrito </h4>
	`;
	modalContainer.append(modalHeader);

	//boton para cerrar modal del carrito
	const modalButton = document.createElement("h4");
	modalButton.innerText = "X";
	modalButton.className = "modal-header-button";
	modalHeader.append(modalButton);

	modalButton.addEventListener("click", () => {
		modalContainer.style.display = "none";
	});

	carrito.forEach((product) => {
		let carritoContent = document.createElement("div");
		carritoContent.className = "modal-content";
		carritoContent.innerHTML = `
	<img class= "producto-img-modal" src ="${product.img}">
	<h3 class="producto-nombre-modal">${product.nombre}</h3>
	<p class="producto-precio-modal">$ ${product.precio}</p>
	`;

		modalContainer.append(carritoContent);
	});

	const total = carrito.reduce((acc, el) => acc + el.precio, 0);

	const totalCompra = document.createElement("div");
	totalCompra.className = "total-content";
	totalCompra.innerHTML = `TOTAL DEL PEDIDO: $ ${total}`;
	modalContainer.append(totalCompra);
});
