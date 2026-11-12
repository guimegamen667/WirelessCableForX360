const btnCor = document.querySelector('#cor')
const div = document.querySelector('#divSurpresa')
const input = document.querySelector('#msg')
const btnAlert = document.querySelector('#envio')

btnAlert.addEventListener('click', () => {
    alert(input.value)
})

btnCor.addEventListener('click', () => {
    const R = Math.random() * 255
    const G = Math.random() * 255
    const B = Math.random() * 255
    div.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
})