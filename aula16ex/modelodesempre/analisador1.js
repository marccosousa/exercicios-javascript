let num = document.querySelector('input#caixa') // resultado da caixa 1 e armazenará na memória
let lista = document.querySelector('select#lista') // res da lista e armazena na memória
let res = document.querySelector('div#res') // jogara na div o resultado 
let valores = []

function vernum(n) { //Verifica se os números podem ser usados na lista
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function verlista(n, l) { // Verifica se o número já foi adicionado na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    
}

function Adicionar() {
    if(vernum(num.value) && !verlista(num.value, valores)) { 
        let numad = Number(num.value)                         // Adicionando números na lista e armazenando no vetor 
        valores.push(numad)                                    
        let item = document.createElement('option')             
        item.text = `O valor ${numad} foi adicionado`           
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        return window.alert('Número invalido ou já adicionado!')
    }
    num.value = '' // limpa a caixa principal
    num.focus()    // coloca pra digitar na caixa principal 
}

function Verificar() {
    if(valores.length == 0) {
        window.alert('Por favor, adicione um número antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}</p>`
    }

}

