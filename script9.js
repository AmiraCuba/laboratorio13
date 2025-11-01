const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2023,
    detalles: function() {
        console.log(`Auto: ${this.marca} ${this.modelo}, Año: ${this.anio}`);
    }
};
auto.detalles();