function tieneDuplicados(arreglo) {
    return new Set(arreglo).size !== arreglo.length;
}
console.log("Ejemplo (true):", tieneDuplicados([1, 2, 1]));
console.log("Ejemplo (false):", tieneDuplicados([1, 2, 3]));