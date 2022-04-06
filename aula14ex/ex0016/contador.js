function contar () {
    var inicio = window.document.getElementById('caixa1')
    var fim = document.getElementById('caixa2')
    var passo = document.getElementById('caixa3')
    var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert ('Preencha todos os campos para continuar')
    } else {
        res.innerHTML = 'Contando...<br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    if (p <= 0) {
        window.alert ('Passo inválido. Considerando passo como 1!')
        p = 1
    }       
    if (i < f) {                                    // Contagem crescente
            for (c = i ; c <=f ; c += p) {
            res.innerHTML += `${c}  \u{1F449}`
            }
            
        } else {                                    // Contagem regressiva
            for (var c = i ; c >= f ; c-= p ) {
                res.innerHTML += `${c} \u{1F449}`
            }
           
        }
        
        res.innerHTML += `\u{1F419}`
    }
}
