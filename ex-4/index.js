const turistName = prompt (`Bem vindo, Qual o nome do turista?`)
let visetedCities = prompt(`Já visitou alguma cidade?`)
let totalCities = ''
let cont = 0

while(visetedCities === "Sim"){
  let newCitie = prompt(`Qual o nome da cidade?`)
  totalCities += `Cidade: ${cont +1} - ${newCitie} \n`
  cont++
  visetedCities = prompt (`Já visitou outras?`)
}

alert (`Turista: ${turistName}
    Cidades visitadas: ${cont}
    Cidades: ${totalCities} `)