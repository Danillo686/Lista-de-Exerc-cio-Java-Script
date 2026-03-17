const button = document.getElementById('enter')
let resp = document.getElementById('resp')
const prox = document.getElementById('prox')

button.addEventListener('click', () => {
    const entrada1 = document.getElementById('entrada1').value
    result = entrada1 * 12.50
    resp.innerHTML = result
})

prox.addEventListener('click', () => {
    window.location.href = 'atividade2.html'
})