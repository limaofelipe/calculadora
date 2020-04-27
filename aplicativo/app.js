function executar() {
    //math.random gera um numero aleatorio com muitos decimais
    //math.round elimina os decimais
    aleatorio = Math.round(Math.random() * 100)
    numerocerto = prompt('Escolha um número') == aleatorio

    if (numerocerto) {
        resultado.innerHTML = "Você Ganhou o Sorteio!"
    }
    if (!numerocerto) {
        resultado.innerHTML = "Não foi dessa vez, Tente novamente!"
    }
}