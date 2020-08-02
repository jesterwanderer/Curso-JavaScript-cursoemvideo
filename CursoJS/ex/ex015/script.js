function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Child
                img.setAttribute('src', 'mbb.png')
            } else if (idade < 21) {
                //Teen
                img.setAttribute('src', 'mj.png')
            } else if (idade < 50) {
                //Adult
                img.setAttribute('src', 'ma.png')
            } else {
                //Senior
                img.setAttribute('src', 'ms.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Child
                img.setAttribute('src', 'fbb.png')
            } else if (idade < 21) {
                //Teen
                img.setAttribute('src', 'fj.png')
            } else if (idade < 50) {
                //Adult
                img.setAttribute('src', 'fa.png')
            } else {
                //Senior
                img.setAttribute('src', 'fs.png')
            }
        }
        res.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}