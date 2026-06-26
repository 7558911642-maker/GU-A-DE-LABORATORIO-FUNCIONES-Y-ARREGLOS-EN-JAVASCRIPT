"use strict";

// arreglo de productos con 20 elementos.

const productos = [
  { id: 1, nombre: "Laptop Lenovo", precio: 2500, categoria: "Tecnología", stock: 5 },
  { id: 2, nombre: "Mouse inalámbrico", precio: 80, categoria: "Tecnología", stock: 15 },
  { id: 3, nombre: "Teclado mecánico", precio: 180, categoria: "Tecnología", stock: 8 },
  { id: 4, nombre: "Monitor 24 pulgadas", precio: 750, categoria: "Tecnología", stock: 4 },
  { id: 5, nombre: "Audífonos Bluetooth", precio: 150, categoria: "Tecnología", stock: 10 },
  { id: 6, nombre: "Silla de oficina", precio: 450, categoria: "Oficina", stock: 6 },
  { id: 7, nombre: "Escritorio de madera", precio: 600, categoria: "Oficina", stock: 3 },
  { id: 8, nombre: "Cuaderno universitario", precio: 15, categoria: "Útiles", stock: 30 },
  { id: 9, nombre: "Lapicero azul", precio: 3, categoria: "Útiles", stock: 50 },
  { id: 10, nombre: "Mochila escolar", precio: 120, categoria: "Útiles", stock: 12 },
  { id: 11, nombre: "Impresora multifuncional", precio: 850, categoria: "Tecnología", stock: 2 },
  { id: 12, nombre: "Memoria USB 64GB", precio: 45, categoria: "Tecnología", stock: 20 },
  { id: 13, nombre: "Disco SSD 1TB", precio: 380, categoria: "Tecnología", stock: 7 },
  { id: 14, nombre: "Calculadora científica", precio: 90, categoria: "Útiles", stock: 9 },
  { id: 15, nombre: "Archivador", precio: 25, categoria: "Oficina", stock: 18 },
  { id: 16, nombre: "Lámpara de escritorio", precio: 70, categoria: "Oficina", stock: 0 },
  { id: 17, nombre: "Tablet Samsung", precio: 1200, categoria: "Tecnología", stock: 4 },
  { id: 18, nombre: "Celular Xiaomi", precio: 950, categoria: "Tecnología", stock: 6 },
  { id: 19, nombre: "Regla de 30 cm", precio: 5, categoria: "Útiles", stock: 25 },
  { id: 20, nombre: "Papel bond A4", precio: 28, categoria: "Oficina", stock: 14 }
];

function mostrarTitulo(titulo) {

  console.log(titulo);
  
}


// 1. VERIFICACIÓN DEL ARREGLO DE 20 PRODUCTOS

mostrarTitulo("1. ARREGLO DE PRODUCTOS");
console.log("Cantidad de productos:", productos.length);
console.table(productos);


// 2. FOREACH CON FUNCIÓN TRADICIONAL

mostrarTitulo("2. FOREACH CON FUNCIÓN TRADICIONAL");

const retornoForEachTradicional = productos.forEach(function (producto) {
  console.log(`${producto.id}. ${producto.nombre} - Stock: ${producto.stock}`);
});

console.log("Valor devuelto por forEach tradicional:", retornoForEachTradicional);

// 3. FOREACH CON FUNCIÓN FLECHA

mostrarTitulo("3. FOREACH CON FUNCIÓN FLECHA");

const retornoForEachFlecha = productos.forEach((producto) => {
  console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
});

console.log("Valor devuelto por forEach flecha:", retornoForEachFlecha);
console.log("Reflexión: forEach devuelve undefined porque solo recorre el arreglo y ejecuta una acción.");



