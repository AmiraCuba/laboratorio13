const empleadosArr = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 },
];
function gestionarEmpleados(lista) {
    const areasTemp = {};
    for (const emp of lista) {
        const { area, nombre, salario } = emp;
        if (!areasTemp[area]) {
            areasTemp[area] = {
                empleados: [],
                totalSalario: 0,
                cantidad: 0
            };
        }
        areasTemp[area].empleados.push(nombre);
        areasTemp[area].totalSalario += salario;
        areasTemp[area].cantidad += 1;
    }
    const resultadoFinal = {};
    for (const area in areasTemp) {
        const data = areasTemp[area];
        resultadoFinal[area] = {
        empleados: data.empleados,
        promedio: data.totalSalario / data.cantidad
        };
    }
    return resultadoFinal;
}
console.log("Ej 14:", gestionarEmpleados(empleadosArr));