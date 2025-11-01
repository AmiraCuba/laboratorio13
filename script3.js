function reordenarPalabras(oracion) {
    const palabras = oracion.split(' ');
    const palabrasOrdenadas = palabras.sort();
    const palabrasMayusculas = palabrasOrdenadas.map(p => p.toUpperCase());
    return palabrasMayusculas;
}
console.log(reordenarPalabras("la vida es dura"));