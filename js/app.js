const contenidoTienda = document.getElementById("contenidoTienda");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
let carrito = [];

//Cards de productos en mi HTML
function renderProductos() {
	productos.forEach((product) => {
		const content = document.createElement("div");
		content.className = "card";
		content.innerHTML = `
    <img class="productoImg" src="${product.img}">
    <h3 class="nombreProducto">${product.nombre}</h3>
    <p class="precioProducto">$ ${product.precio}</p>
    `;

		const comprar = document.createElement("button");
		comprar.innerText = "COMPRAR";
		comprar.className = "comprar";
		content.append(comprar);

		comprar.addEventListener("click", () => {
			agregarAlCarrito(product);
		});

		contenidoTienda.append(content);
	});
}

//CARRITO
function agregarAlCarrito(producto) {
	const index = carrito.findIndex((item) => item.id === producto.id);

	if (index !== -1) {
		carrito[index].cantidad++;
	} else {
		carrito.push({
			id: producto.id,
			img: producto.img,
			nombre: producto.nombre,
			precio: producto.precio,
			cantidad: 1,
		});
	}

	guardarCarrito();
	Swal.fire("Su producto se agregó al carrito");

	actualizarNumeroProductos(); // Actualizar el número de productos en el carrito
}

//Enviar al local storage
function guardarCarrito() {
	localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Recuperar carrito del Local Storage al cargar la página
window.onload = function () {
	const carritoLocalStorage = localStorage.getItem("carrito");
	if (carritoLocalStorage) {
		let carritoParseado = JSON.parse(carritoLocalStorage);
		if (Array.isArray(carritoParseado)) {
			carrito = carritoParseado;
		} else {
			carrito = Object.values(carritoParseado);
			guardarCarrito();
		}
		mostrarCarrito();
	}
};

//Funciones del carrito
function eliminarProducto(id) {
	carrito = carrito.filter((product) => product.id !== id);
	mostrarCarrito();
}

function sumarProducto(id) {
	const index = carrito.findIndex((item) => item.id === id);
	if (index !== -1) {
		carrito[index].cantidad++;
		mostrarCarrito();
		guardarCarrito();
		actualizarNumeroProductos(); // Actualizar el número de productos en el carrito
	}
}

function restarProducto(id) {
	const index = carrito.findIndex((item) => item.id === id);
	if (index !== -1 && carrito[index].cantidad > 1) {
		carrito[index].cantidad--;
		mostrarCarrito();
		guardarCarrito();
		actualizarNumeroProductos(); // Actualizar el número de productos en el carrito
	}
}

function mostrarCarrito() {
	modalContainer.innerHTML = `
    <div class="modal-header">
    <h4 class="modal-header-title">Carrito</h4>
    <h4 class="modal-header-button">Cerrar X</h4>
    </div>
`;
	modalContainer.style.display = "flex";

	const vaciarCarritoBtn = document.createElement("button");
	vaciarCarritoBtn.innerText = "Vaciar Carrito";
	vaciarCarritoBtn.className = "vaciar-btn";
	modalContainer.append(vaciarCarritoBtn);

	vaciarCarritoBtn.addEventListener("click", () => {
		carrito = [];
		guardarCarrito();
		mostrarCarrito();
		document.querySelector(".numCarrito").innerText = carrito.length;
	});

	const modalButton = modalContainer.querySelector(".modal-header-button");
	modalButton.addEventListener("click", () => {
		modalContainer.style.display = "none";
	});

	const numCarrito = document.querySelector(".numCarrito");
	numCarrito.innerText = carrito.length; // Actualizar el número de productos en el carrito

	carrito.forEach((product) => {
		const carritoContent = document.createElement("div");
		carritoContent.className = "modal-content";
		carritoContent.innerHTML = `
    <img class="producto-img-modal" src="${product.img}">
    <h3 class="producto-nombre-modal">${product.nombre}</h3>
    <p class="producto-precio-modal">$ ${product.precio} - x${product.cantidad}</p>
    <button class="sumar-btn">+</button>
    <button class="restar-btn">-</button>
    <button class="eliminar-btn">Eliminar todo</button>
    `;
		modalContainer.append(carritoContent);

		const sumarBtn = carritoContent.querySelector(".sumar-btn");
		sumarBtn.addEventListener("click", () => {
			sumarProducto(product.id);
		});

		const restarBtn = carritoContent.querySelector(".restar-btn");
		restarBtn.addEventListener("click", () => {
			restarProducto(product.id);
		});

		const eliminarBtn = carritoContent.querySelector(".eliminar-btn");
		eliminarBtn.addEventListener("click", () => {
			eliminarProducto(product.id);
		});
	});

	const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
	const totalCompra = document.createElement("div");
	totalCompra.className = "total-content";
	totalCompra.innerHTML = `TOTAL: $ ${total}`;
	modalContainer.append(totalCompra);
}



verCarrito.addEventListener("click", mostrarCarrito);
renderProductos();

function actualizarNumeroProductos() {
	const numCarrito = document.querySelector(".numCarrito");
	numCarrito.innerText = carrito.reduce((acc, item) => acc + item.cantidad, 0);
}