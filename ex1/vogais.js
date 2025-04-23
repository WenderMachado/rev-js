function contarVogais(palavra) {
  const vogais = "aeiouAEIOU"
  let contador = 0

  for (let i = 0; i < palavra.length; i++) { 
      if (vogais.includes(palavra[i])) { 
          contador++
  }

  return contador
}}

console.log(contarVogais("javascra"))
console.log(contarVogais("RRAÇÃO"))