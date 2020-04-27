function populaTela(valor) {
    document.getElementById("display").value += valor;
}

function limpaTela(valor) {
    document.getElementById("display").value = valor;
}

function calcula() {
    try {
        limpaTela(eval(document.getElementById("display").value))
    } catch (e) {
        limpaTela("Erro!");
    }
}

function mostrar() {
    document.getElementById('sidebar').classList.toggle('active');
}