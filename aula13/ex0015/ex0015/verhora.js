function carregar() {
    var msg = window.document.querySelector('div#msg')
    var comprimento = window.document.querySelector('p#comprimento')
    //var img = window.document.querySelector('div#img')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora > 0 && hora < 12) {
        comprimento.innerHTML = '<strong>Bom dia!!</strong>'
        imagemp.src = 'fotomanha.jpg'
        document.body.style.backgroundColor = 'rgba(255, 123, 0, 0.76)'
    }
    else if (hora > 12 && hora < 18) {
        comprimento.innerHTML = 'Boa tarde!!'
        imagemp.src = 'fototarde.jpg'
        document.body.style.backgroundColor = 'rgba(255, 72, 0, 0.795)'
    } else {
        comprimento.innerHTML = 'Boa noite!!'
        imagemp.src = 'fotonoite.jpg'
        document.body.style.backgroundColor = 'rgba(20, 9, 70, 0.658)'

    }
    
    

}
