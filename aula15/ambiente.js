let composta = [3, 1, 9] // variáveis compostas!
composta [3] = 4 // adiciona no índice da variável
composta.push(2) // adiciona no ,final da variável
composta.sort // organiza na posição crescente a varíavel
console.log (`nosso vetor é o ${composta}`)
console.log(`o vetor tem ${composta.length} posições`) // número de índices na variável
console.log(`a primeira posição do vetor é ${composta[0]}`)
let pos = composta.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`o valor está na posição ${pos}`)
}


