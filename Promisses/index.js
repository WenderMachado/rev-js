
async function imc(weight, height) {
    if(typeof weight === "number" && typeof height === "number"){
      return(weight / (height * height))
    } else{
      throw new Error('deu erro patraO')
    }
}

async function showImc(weight, height) {
  try {
    console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)

    const result = await imc(weight, height)
    
    console.log(`O resultado do IMC foi de ${result}.`)
  
    if (result < 18.5) console.log('Situação: MAGREZA')
    else if (result < 25) console.log('Situação: NORMAL')
    else if (result < 30) console.log('Situação: SOBREPESO')
    else if (result < 40) console.log('Situação: OBESIDADE')
    else console.log('Situação: OBESIDADE GRAVE')
  } catch (error) {
    console.log(error)
  }
}

showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, "texto")
showImc(82, 1.72)
showImc(120, 1.80)