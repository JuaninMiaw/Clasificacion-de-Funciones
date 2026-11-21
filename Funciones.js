let x = 0;
let y = 0;

function generar() {

    x = Math.floor(Math.random() * 7) - 3;
    y = Math.floor(Math.random() * 7) - 3;

    document.getElementById("valorX").textContent = "b = " + x;
    document.getElementById("valorY").textContent = "c = " + y;

    document.querySelectorAll(".caja").forEach(caja => {
        caja.classList.remove("activa");
    });

    let tipo = "";
    let explicacion = "";
    let funcion = "";

    if (x !== 0 && y !== 0) {

        tipo = "FUNCIÓN AFÍN";
        explicacion = "Es una recta que no pasa por el origen.";
        funcion = "f(x) = " + x + "*x + (" + y + ")";

        document.getElementById("cajaAfin").classList.add("activa");

    } else if (x !== 0 && y === 0) {

        tipo = "FUNCIÓN LINEAL";
        explicacion = "Pasa por el origen (0,0).";
        funcion = "f(x) = " + x + "*x";

        document.getElementById("cajaLineal").classList.add("activa");

    } else if (x === 0 && y !== 0) {

        tipo = "FUNCIÓN CONSTANTE";
        explicacion = "Su gráfica es una línea horizontal.";
        funcion = "f(x) = " + y;

        document.getElementById("cajaConstante").classList.add("activa");

    } else {

        tipo = "NO HAY FUNCIÓN";
        explicacion = "Ambos coeficientes son cero.";
        funcion = "f(x) = 0";

        document.getElementById("cajaNo").classList.add("activa");
    }

    document.getElementById("tipo").textContent = tipo;
    document.getElementById("formula").textContent = funcion;
    document.getElementById("explicacion").textContent = explicacion;
    document.getElementById("expresionGeo").textContent = funcion;

    actualizarGrafico();
}

window.addEventListener("load", iniciarGeoGebra);

function copiarFuncion() {

    let funcion;

    if (x === 0) {
        funcion = "f(x) = " + y;
    } else {
        funcion = "f(x) = " + x + "*x + (" + y + ")";
    }

    navigator.clipboard.writeText(funcion);
}

document.getElementById("archivoGGB").addEventListener("change", function() {

    let archivo = this.files[0];

    if (archivo) {
        document.getElementById("nombreArchivo").textContent =
            "Archivo seleccionado: " + archivo.name;
    }

});

