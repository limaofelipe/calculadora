function calcular() {
    //Aqui vc recebe o valor do input com id="altura"
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    //Calcula imc nao seu bem a formula vou simular uma formula
    var imc = peso / (altura * altura)

    //Aqui vc vai imprimir o resultado do calculo numa div com id="div_resposta"
    document.getElementById("display").innerHTML = imc.toFixed(1);
}