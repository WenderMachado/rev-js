let menu = ''
const properties = []

do {
  menu = prompt(`Bem-vindo ao cadastro de imóveis:
Imóveis registrados: ${properties.length}

Opções:
1 - Salvar imóvel
2 - Mostrar imóveis
3 - Sair`)

  switch (menu) {
    case "1":
      let newProperty = {}

      newProperty.name = prompt('Nome do proprietário:')
      
      newProperty.rooms = Number(prompt('Quantidade de quartos:'))
      while (isNaN(newProperty.rooms) || newProperty.rooms <= 0) {
        newProperty.rooms = Number(prompt('Valor inválido. Insira a quantidade de quartos:'))
      }

      newProperty.bathrooms = parseFloat(prompt('Quantidade de banheiros:'))
      while (isNaN(newProperty.bathrooms) || newProperty.bathrooms <= 0) {
        newProperty.bathrooms = parseFloat(prompt('Valor inválido. Insira a quantidade de banheiros:'))
      }

      let hasGarage = confirm('Possui garagem?')
      newProperty.garage = hasGarage ? "Sim" : "Não"

      const confirmation = confirm(
        `Confirma os dados abaixo?\n\n` +
        `Proprietário: ${newProperty.name}\n` +
        `Quartos: ${newProperty.rooms}\n` +
        `Banheiros: ${newProperty.bathrooms}\n` +
        `Garagem: ${newProperty.garage}`
      )

      if (confirmation) {
        properties.push(newProperty)
        alert('Imóvel cadastrado com sucesso!')
      }

      break

    case "2":
      if (properties.length === 0) {
        alert('Nenhum imóvel cadastrado.')
      } else {
        for (let i = 0; i < properties.length; i++) {
          const prop = properties[i]
          alert(
            `Imóvel ${i + 1}:\n` +
            `Proprietário: ${prop.name}\n` +
            `Quartos: ${prop.rooms}\n` +
            `Banheiros: ${prop.bathrooms}\n` +
            `Garagem: ${prop.garage}`
          )
        }
      }
      break

    case "3":
      alert('Saindo do programa...')
      break

    default:
      alert('Opção inválida.')
      break
  }

} while (menu !== "3")