let moneyInital = Number(prompt(`Qual o valor inicial de dinheiro`))
while(isNaN(moneyInital) || moneyInital <= 0){
  moneyInital = parseFloat(prompt(`valor inválido por favor, insira um número`))
}
let carteira = moneyInital
let option = ""

do {
  option = prompt(`Bem vindo ao menu interativo, escolha uma das opções:
  1-Adicionar Dinheiro
  2-Remover Dinheiro
  3-Sair
  Sua carteira : ${carteira}`)

  switch(option){
    case '1':
    addMoney = Number(prompt(`Qual valor vai ser adicionado`))
    while(isNaN(addMoney) || moneyInital <= 0){
      addMoney = Number(prompt(`insira um valor válido`))
    }
    carteira += addMoney
     alert(`Valor adicionado com sucesso! Saldo atual: R$ ${carteira}`)
    break

    case "2":
       removeMoney = Number(prompt(`Qual valor vai ser removido de ${carteira}`))
    while(isNaN(removeMoney) || moneyInital <= 0 || removeMoney > carteira){
      removeMoney = Number(prompt(`insira um valor válido`))
    }
    if(removeMoney <= carteira){
       carteira -= removeMoney
        alert(`Valor removido com sucesso! Saldo atual: R$ ${carteira.toFixed(2)}`)
    }else {
        alert(`Erro: O valor a ser removido não pode exceder o saldo atual.`)
        }
      break
      
        case "3":
          alert(`Saindo do programa. Saldo final: R$ ${carteira.toFixed(2)}`)
        break
    
      default:
        alert(`opção inválida`)
        break
  }
} while (option !== "3");