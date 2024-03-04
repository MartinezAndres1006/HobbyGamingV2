//Aca hay variables que sirven para levantar el proyecto
let mostrarTodoProductos = document.getElementById("mostrarTodoProductos");
const div = document.querySelector(".mostrarCarrito");
let precioTotal = document.getElementById("precioTotal");
let verCarrito = document.getElementById("productosCarrito");
let carrito = [];
let storage = JSON.parse(localStorage.getItem("Carrito"))




export {mostrarTodoProductos,div,precioTotal,verCarrito,carrito,storage};
