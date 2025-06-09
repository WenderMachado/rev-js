const imoveis = []
 let menu = ''
do {
  menu = prompt(`Escolha uma das opções:
    1-Salvar imóvel
    2-Mostrar imóvel
    3-Encerar
    
    Imoveis cadastrados: ${imoveis.length}`)

    switch (menu) {

      case "1":

        let newImovel = {}
        newImovel.proprietario = prompt(`Qual o nome do proprietário?`)
        newImovel.quartos = prompt(`Quantos quartos?`)
        while (isNaN(newImovel.quartos) || newImovel.quartos.trim() === "") {
          alert(`Opção inválida`)
          newImovel.quartos = prompt(`Insira um valor válido de quartos!`)
        }
        newImovel.quartos = Number(newImovel.quartos)
        
        newImovel.banheiros = prompt(`Quantos banheiros?`)
        while (isNaN(newImovel.banheiros) || newImovel.banheiros.trim() === "") {
          alert(`Opção inválida`)
          newImovel.banheiros = prompt(`Insira um valor válido de banheiros!`)
        }
        newImovel.banheiros = Number(newImovel.banheiros)
        newImovel.garagem = confirm(`Possui garagem?`)
        newImovel.garagem = newImovel.garagem ? "Sim temos" : "não temos"

        const confirmacao = confirm(`Você confirma o cadastro desse imóvel: 
          Nome: ${newImovel.proprietario}
          Quartos: ${newImovel.quartos}
          Banheiros: ${newImovel.banheiros}
          Garegem: ${newImovel.garagem}`)

          if(confirmacao){
          imoveis.push(newImovel)
          }
        break;

        case "2":
          for(let i= 0 ; i < imoveis.length; i++){
           
            alert(`imóvel: (${i + 1}) 
          Nome: ${imoveis[i].proprietario}
          Quartos: ${imoveis[i].quartos}
          Banheiros: ${imoveis[i].banheiros}
          Garegem: ${imoveis[i].garagem}`)
          }
          break
        case "3":
          alert(`Encerando o programa`)
        break
      default:
      alert(`opção invalida`)
        break;
    }

} 


