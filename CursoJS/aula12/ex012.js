var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas!`)
if (horas < 12 && horas > 5) {
    console.log('Bom dia!')
} else if (horas < 18 && horas > 5) {
    console.log('Boa Tarde!')
} else if (horas < 24 && horas > 5) {
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada meu guerreiro saiajin!')
}