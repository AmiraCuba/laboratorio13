const compras = new Map([
    ["Pera", 2.5],
    ["Queso", 4.62]
]);
compras.set("Leche", 2.34);
let total = 0;
for (const precio of compras.values()) {
    total += precio;
}
console.log("Total:", total);