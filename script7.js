function contarPalabras(texto) {
    const conteo = new Map();
    const palabras = texto.toLowerCase().split(/\s+/);
    for (const p of palabras) {
        if (p) {
        conteo.set(p, (conteo.get(p) || 0) + 1);
        }
    }
    return conteo;
}
console.log(contarPalabras("Introducción Al Desarrollo Web"));