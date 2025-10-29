let numeros = [1, 2, 3, 4, 5];
function doblarNumeros (arreglo) {
    let arregloDoble = new Array(arreglo.length);
    for (let i = 0; i < arreglo.length; i++){
        arregloDoble[i] = arreglo[i]*2;
    } 
    return arregloDoble;
}
console.log(`El doble del arreglo [${numeros}] es [${doblarNumeros(numeros)}] `);