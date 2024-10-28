function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique as informações!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png.png')
            }else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png.png')
            }
        }else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png.png')
            }else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}