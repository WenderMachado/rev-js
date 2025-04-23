let carteira = parseFloat(prompt(`Qual sua quantidade de dinheiro?`))
function menu(){
  return prompt(`Carteira ${carteira}:
    1-Adicionar Dinheiro
    2-Remover Dinheiro
    3-Sair
  `)
}

function executar(){
  let opcao =''
  do {
    opcao = menu()
    switch (opcao) {
    case "1":
      addMoney = parseFloat(prompt(`Quanto vai adicionar?`))
      carteira += addMoney
        alert(`Carteira: ${carteira}`)
        break;
    case "2":
      removeMoney = parseFloat(prompt(`Quanto vai remover?`))
      carteira -= removeMoney
        alert(`Carteira: ${carteira}`)
      break;
    case "3":
      alert(`iasdlido`)
      break;
      default:
        alert(`valide novamente`)
        break;
    }


  } while (opcao !== "3");
}

executar()