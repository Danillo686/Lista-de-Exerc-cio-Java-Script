const button = document.getElementById('enter')
let resp = document.getElementById('resp')
const prox = document.getElementById('prox')
let compra = 25.00
let lucro = 15.00

button.addEventListener('click', () => {
    const qntd = document.getElementById('entrada1').value
    lucro_final = lucro * qntd
    resp.innerHTML = `Quantidade de Camisetas Vendidas: ${qntd}. Lucro: ${lucro_final}`
})

prox.addEventListener('click', () => {
    window.location.href = 'atividade3.html'
})