let numeros = [1, 2, -3, 4, -5, 6, -7, 8, 9, -10];
function filtrarYTransformar (arreglo) {
    let arregloTransformado = elevarAlCuadrado(eliminarNegativos(arreglo));
    function eliminarNegativos(arreglo){
        return arreglo.filter(item => item > 0);;
    }
    function elevarAlCuadrado (arreglo){
        arreglo.map(item => item**2);
        return arreglo.map(item => item**2);;
    }
    return arregloTransformado;
}
console.log(`El doble del arreglo [${numeros}] es [${filtrarYTransformar(numeros)}] `);