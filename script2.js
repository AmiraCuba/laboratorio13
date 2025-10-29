let numeros = [1, 2, -3, 4, -5, 6, -7, 8, 9, -10];
function filtrarYTransformar (arreglo) {
    let arregloTransformado = elevarAlCuadrado(eliminarNegativos(arreglo));
    let sumaFinal = suma(arregloTransformado);
    function eliminarNegativos(arreglo){
        return arreglo.filter(item => item > 0);;
    }
    function elevarAlCuadrado (arreglo){
        arreglo.map(item => item**2);
        return arreglo.map(item => item**2);;
    }
    function suma (arreglo){
        let suma = 0;
        for (const item of arreglo){
            suma += item;
        }
        return suma;
    }
    return sumaFinal;
}
console.log(`El arreglo [${numeros}] filtrado y sumando sus elementos es ${filtrarYTransformar(numeros)} `);