let valores = [8, 5, 4, 9, 2]
valores.sort()
console.log(valores)
/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4]) pra que isso td?

for (let pos = 0 ; pos<valores.length; pos++ ){
    console.log(valores[pos]) 
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
