// Cálculo de IMC
const nome = 'Raphael'
const peso = 75
const altura = 1.72

const IMC = (peso / (altura * altura))

if (IMC >= 30) {
    console.log(`${nome} você está acima do peso.`)
}
else {
    console.log(`${nome} você não está acima do peso.`)
}