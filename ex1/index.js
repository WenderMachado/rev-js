let palavra = prompt("Qual a palavra?");
let inversalWorld = ''

function buscandoPalindrom(palavra) {
  for (let i = palavra.length - 1; i >= 0; i--) {
    inversalWorld += palavra[i]
  }
  if (palavra === inversalWorld) {
    console.log(`"${palavra}" é um palíndromo!`)
  } else {
    console.log(`"${palavra}" não é um palíndromo.`)
  }
}

buscandoPalindrom(palavra)