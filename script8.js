function invertirMap(mapa) {
    const mapInvertido = new Map();
    for (const [key, value] of mapa.entries()) {
        mapInvertido.set(value, key);
    }
    return mapInvertido;
}
const capitales = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"]
]);
console.log(invertirMap(capitales));
