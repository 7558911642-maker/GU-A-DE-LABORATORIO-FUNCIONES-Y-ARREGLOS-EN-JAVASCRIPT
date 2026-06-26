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

// 4. MAP: CREACIÓN DE UNA NUEVA COLECCIÓN DE ETIQUETAS

mostrarTitulo("4. MAP - ETIQUETAS DE PRODUCTOS");

const etiquetas = productos.map(
  (producto) => `PRODUCTO: ${producto.nombre} - $${producto.precio}`
);

console.table(etiquetas);
console.log("Cantidad de etiquetas creadas:", etiquetas.length);
console.log("Reflexión: map es correcto porque se necesita un nuevo arreglo transformado.");


// 5. FILTER: CATEGORÍA ESPECÍFICA Y STOCK MAYOR A CERO

mostrarTitulo("5. FILTER - PRODUCTOS DE TECNOLOGÍA CON STOCK");

const copiaAntesDelFilter = JSON.stringify(productos);
const categoriaBuscada = "Tecnología";

const productosFiltrados = productos.filter(
  (producto) =>
    producto.categoria === categoriaBuscada && producto.stock > 0
);

console.table(productosFiltrados);
console.log("Cantidad de productos filtrados:", productosFiltrados.length);
console.log(
  "¿El arreglo original fue modificado?",
  JSON.stringify(productos) === copiaAntesDelFilter ? "No" : "Sí"
);
console.log("Reflexión: filter crea un nuevo arreglo y no modifica el arreglo original.");

// 6. FIND: BÚSQUEDA DE UN PRODUCTO POR ID

mostrarTitulo("6. FIND - BÚSQUEDA POR ID");

const idBuscado = 5;
const productoEncontrado = productos.find(
  (producto) => producto.id === idBuscado
);

console.log("ID buscado:", idBuscado);
console.log("Producto encontrado:", productoEncontrado);
console.log("Reflexión: si dos productos tuvieran el mismo ID, find devolvería solo la primera coincidencia.");


// 7. REDUCE: VALOR MONETARIO TOTAL Y TABLA DE TRAZA

mostrarTitulo("7. REDUCE - VALOR TOTAL DEL INVENTARIO");

const tablaTraza = [];

const valorTotalInventario = productos.reduce(
  (acumulador, producto, indice) => {
    const subtotal = producto.precio * producto.stock;
    const resultadoParcial = acumulador + subtotal;

    tablaTraza.push({
      iteracion: indice + 1,
      producto: producto.nombre,
      acumuladorAnterior: acumulador,
      precioActual: producto.precio,
      stockActual: producto.stock,
      subtotal,
      resultadoParcial
    });

    return resultadoParcial;
  },
  0
);

console.table(tablaTraza);
console.log("Valor monetario total del inventario: $" + valorTotalInventario);
console.log("Reflexión: reduce acumula el subtotal precio por stock de cada producto hasta obtener un único valor.");

// 8. SOME: PRODUCTOS CON PRECIO MAYOR A 500

mostrarTitulo("8. SOME - ¿EXISTE UN PRODUCTO MAYOR A $500?");

const existeProductoMayorA500 = productos.some(
  (producto) => producto.precio > 500
);

const productosMayoresA500 = productos.filter(
  (producto) => producto.precio > 500
);

console.log("Resultado de some:", existeProductoMayorA500);
console.log("Tipo de dato devuelto por some:", typeof existeProductoMayorA500);
console.log("Resultado de filter para comparar:");
console.table(productosMayoresA500);
console.log("Reflexión: some devuelve true o false; filter devuelve un arreglo con todas las coincidencias.");



// 9. CONTEXTO THIS CON FUNCIÓN FLECHA

mostrarTitulo("9. THIS EN FUNCIÓN FLECHA Y FUNCIÓN TRADICIONAL");

const productoConFlecha = {
  nombre: "Laptop Lenovo",
  mostrarNombre: () => {
    console.log("Resultado con función flecha:", this?.nombre);
  }
};

const productoConFuncionTradicional = {
  nombre: "Laptop Lenovo",
  mostrarNombre: function () {
    console.log("Resultado con función tradicional:", this.nombre);
  }
};

productoConFlecha.mostrarNombre();
productoConFuncionTradicional.mostrarNombre();

console.log(
  "Reflexión: la función flecha no crea su propio this; usa el this del ámbito exterior. " +
  "La función tradicional sí recibe como this al objeto que ejecuta el método."
);

// 10. RESUMEN FINAL

mostrarTitulo("10. FINAL DEL LABORATORIO");

console.log("Productos registrados:", productos.length);
console.log("Etiquetas creadas con map:", etiquetas.length);
console.log("Productos filtrados:", productosFiltrados.length);
console.log("Producto encontrado:", productoEncontrado?.nombre ?? "No encontrado");
console.log("Valor total del inventario: $" + valorTotalInventario);
console.log("¿Hay productos mayores a $500?:", existeProductoMayorA500);
console.log("Laboratorio ejecutado correctamente.");
