function soma() {
    let palavraA = Number(document.querySelector('#A').value)
    let palavraB = Number(document.querySelector('#B').value)

    var resposta = document.querySelector('#resposta');

    resposta.innerHTML = palavraA + palavraB
}
function menos() {
    let palavraA = Number(document.querySelector('#A').value)
    let palavraB = Number(document.querySelector('#B').value)

    var resposta = document.querySelector('#resposta');

    resposta.innerHTML = palavraA - palavraB
}
function vezes() {
    let palavraA = Number(document.querySelector('#A').value)
    let palavraB = Number(document.querySelector('#B').value)

    var resposta = document.querySelector('#resposta');

    resposta.innerHTML = palavraA * palavraB
}
function divisao() {
    let palavraA = Number(document.querySelector('#A').value)
    let palavraB = Number(document.querySelector('#B').value)

    var resposta = document.querySelector('#resposta');

    resposta.innerHTML = palavraA / palavraB
}
