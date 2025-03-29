function menu(){
  return prompt(`Escolha uma das opções:
    1-Nada
    2-Nada
    3-Nada
    4-Nada
    5-Encerrar`)
}

function executar(){
  let opcao =''
  do {
    opcao = menu()
    switch (opcao) {
    case "1":
        alert(`invalido`)
        break;
    case "2":
      alert(`invalidsddo`)
      break;
    case "3":
      alert(`iasdlido`)
      break;
    case "4":
      alert(`invalido`)
      break;
    case "5":
      alert(`encerando`)
      break;
      default:
        alert(`valide novamente`)
        break;
    }


  } while (opcao !== "5");
}

executar()