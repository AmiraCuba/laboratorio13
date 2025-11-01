const tiendaA = { laptop: 3500.5, mouse: 95.2, monitor: 720.457 };
const tiendaB = { mouse: 720.457, monitor: 260.1, teclado: 250.9 };
function combinarCatalogos(tA, tB) {
    const catalogoFinal = { ...tA };
    for (const prod in tB) {
        if (catalogoFinal.hasOwnProperty(prod)) {
            catalogoFinal[prod] = Math.min(catalogoFinal[prod], tB[prod]);
        } else {
        catalogoFinal[prod] = tB[prod];
        }
    }
    for (const prod in catalogoFinal) {
        catalogoFinal[prod] = parseFloat(catalogoFinal[prod].toFixed(2));
    }
    return catalogoFinal;
}
console.log(combinarCatalogos(tiendaA, tiendaB));