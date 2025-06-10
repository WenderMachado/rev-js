let menu = ''
const property = []


do {
  menu = prompt (`Bem vindo ao cadastro de imóvies:
    Imóveis registrados ${property.length}
    Opções:
    1-Salvar imóvel
    2-Mostrar imóvel
    3-Sair`)


    switch (menu) {
      case "1":
        let newProperty = {}
        newProperty.name = prompt ('Insira o nome do proprietário')
        newProperty.rooms = Number(prompt(`Qual a quantidade de quartos?`))
        while(isNaN(newProperty.rooms) || newProperty.rooms <= 0){
          newProperty.rooms = Number(prompt(`Inválido, insira a numerção da quantidade de quartos?`))
        }
        newProperty.bathrooms = parseFloat(prompt(`Quantos bathrooms?`))
        while (isNaN(newImovel.bathrooms) || newImovel.bathrooms <= 0) {
         newImovel.bathrooms = parseFloat(prompt(`Entrada inválida. Digite um número válido para os bathrooms:`))
      }
        newProperty.garage = confirm (`Vai ter garagem?`)
        newProperty.garage =newProperty.garage = true ? "sim, temos." : "não temos"

        const confirmation = confirm (`você confirma essas informações:
          Proprietário: ${newProperty.name}
          Banheiros: ${newProperty.bathrooms}
          Quartos: ${newProperty.rooms}
          Garagem: ${newProperty.garage}`)

          if(confirmation){
            property.push(newProperty)
            alert(`imóvel cadastrado.`)
          }

        break
        
        case "2":
        if(property.length <= 0){
          alert(`não há imoveis cadastrados`)
        }
        else{
          for(let i = 0; i < property.length; i++){

            alert(` 
          Proprietário: ${newProperty[i].name}
          Banheiros: ${newProperty[i].bathrooms}
          Quartos: ${newProperty[i].rooms}
          Garagem: ${newProperty[i].garage}`)
          }
        }
        break
    
      default:
        alert(`invalido`)
        break;
    }
} while (menu !== "3");