let numberInitial = Number(prompt(`Qual o número a ser calculado na tabuada?`))
while(isNaN(numberInitial) || numberInitial <= 0){
  numberInitial = parseFloat(prompt(`valor inválido por favor, insira um número`))
}
let result = ''
for (let index = 1 ; index <= 20; index++) {
 
 result += `${numberInitial} x ${index} = ${numberInitial * index}\n`
}

alert(`Resultado da tabuada de ${numberInitial}:\n\n${result}`)