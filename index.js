window.onload = function () {
    document.getElementById("btncambiar").onclick = function cambiar() {
    document.getElementById("textoconvertido").value = "\n" + document.getElementById("texto").value.replace(/[aeou]/g, "i").replace(/[AEOU]/g, "I").replace(/[ÁÉÓÚ]/g, "Í").replace(/[äëöü]/g, "ï").replace(/[ÄËÖÜ]/g, "Ï").replace(/[áéóú]/g, "í");
    };
};