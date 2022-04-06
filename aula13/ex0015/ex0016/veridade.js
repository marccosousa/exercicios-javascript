function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('ano')
    var res = window.document.querySelector('div#res')
    
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('verifique os dados!')
    } else {
        var radsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radsex [0].checked) {
            gênero = 'um homem'
            if(idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'criançamasc.jpg')
            } else if (idade < 24) {
                //jovem
                img.setAttribute('src', 'jovemmasc.jpg')
            }else if (idade < 60) {
                img.setAttribute('src', 'adultomasc.jpg')
                //Adulto
            } else {
                img.setAttribute('src', 'idosomasc.jpg')
                //Idoso
            }
        } else if (radsex [1].checked) {
            gênero = 'uma mulher'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criançafem.jpg')
            } else if (idade < 24) {
                //jovem
                img.setAttribute('src', 'jovemfem.jpg')
            }else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adultofem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosofem.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)

        //res.innerHTML = `Idade calculada: ${idade}`
    }
}

