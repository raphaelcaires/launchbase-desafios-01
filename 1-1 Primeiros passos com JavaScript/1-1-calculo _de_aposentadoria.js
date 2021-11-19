/* Cáculo de aposentadoria */
const nome = "Raphael"
const sexo = "M"
const idade = 60
const contribuicao = 35

if ((sexo == "M" && contribuicao >= 35) || (sexo == "F" && contribuicao >= 30)) {
    if ((sexo == "M" && (idade + contribuicao) >= 95) || (sexo == "F" && (idade + contribuicao) >= 85)) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}