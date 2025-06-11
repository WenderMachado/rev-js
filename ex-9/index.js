function triangular(){
  let base = parseFloat(prompt("Qual a base do triangulo?"))
   while(isNaN(base) || base <= 0 ){
     base =parseFloat(prompt("Entrada inválida, diga uma base em número"))
    } 
  let altura  = parseFloat(prompt("Qual aaltura do triangulo?"))
  while(isNaN(altura) || altura <= 0 ){
    altura = parseFloat(prompt("Entrada inválida, diga uma altura em número"))
   } 

   return base * altura / 2
}
function retangular(){
  let base = parseFloat(prompt("Qual a base do retangulo?"))
   while(isNaN(base) || base <= 0 ){
     base =parseFloat(prompt("Entrada inválida, diga uma base em número"))
    } 
  let altura  = parseFloat(prompt("Qual altura do retangulo?"))
  while(isNaN(altura) || altura <= 0 ){
    altura = parseFloat(prompt("Entrada inválida, diga uma altura em número"))
   } 

   return base * altura 
}

function quadrada(){
  let lado = parseFloat(prompt("Qual o lado do quadrado?"))
   while(isNaN(lado) || lado <= 0 ){
     lado =parseFloat(prompt("Entrada inválida, diga umalado em número"))
    } 

   return lado * lado
}

function trapezio(){
  let baseMaior = parseFloat(prompt("Qual a baseMaior do trapezio?"))
   while(isNaN(baseMaior) || baseMaior <= 0 ){
     baseMaior =parseFloat(prompt("Entrada inválida, diga uma baseMaior em número"))
    } 
    let baseMenor = parseFloat(prompt("Qual a baseMenor do trapezio?"))
   while(isNaN(baseMenor) || baseMenor <= 0 ){
     baseMenor =parseFloat(prompt("Entrada inválida, diga uma base em número"))
    } 

  let altura  = parseFloat(prompt("Qual altura do trapezio?"))
  while(isNaN(altura) || altura <= 0 ){
    altura = parseFloat(prompt("Entrada inválida, diga uma altura em número"))
   } 
   return (baseMaior + baseMenor) * altura / 2
}

function circular(){
  let pi = 3.14
  let raio = parseFloat(prompt("Qual o raio do circulo?"))
  while(isNaN(raio) || raio <= 0){
    raio = parseFloat(prompt("Raio invalido, diga em número"))
  }
  return pi * (raio *raio )
}


function menu(){
  return  prompt(`Calculadora Geométrica:
    1-Calcular Área do triângulo
    2-Calcular Área do retânulo
    3-Calcular Área do quadrado
    4-Calcular Área do trapézio
    5-Calcular Área do círculo
    6-Sair`)
}

function executar(){
  let result = ''
  let opcao = ''
  do{
    opcao = menu()
    switch(opcao){
      case "1":
         result = triangular()
      alert(`O resultado da função triangular foi ${result}`)
      break
      case "2":
      result = retangular()
      alert(`O resultado da função retangular foi ${result}`)
      break
      case "3":
        result = quadrada()
      alert(`O resultado da função quadrada foi ${result}`)
      break
      case "4":
       result = trapezio()
      alert(`O resultado da função trapezio foi ${result}`)
      break
      case "5":
      result = circular()
      alert(`o resultado do trapezio foi ${result}`)
      break
      case "6":
      alert("encerando")
  
    }
  }while(opcao !== "6")
 
}

executar()