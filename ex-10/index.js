const vocancies = []

function showVacancies() {
  const vacanciesInText = vocancies.reduce((finalText, vacancy, index) => {
    finalText += `
    Vaga ${index + 1}
    Nome: ${vacancy.jobTitle}
    Candidatos inscritos: ${vacancy.candidates.length}\n`
    return finalText
  }, "")
  alert(vacanciesInText)
}

function createNewVacancy() {
  const jobTitle = prompt("Insira o nome da vaga que deseja adicionar")
  const jobDescription = prompt("Insira uma descrição para essa vaga")
  const deadline = prompt("Qual a data limite para essa vaga - DD/MM/YYYY")

  const confirmation = confirm(`Você confirma a criação dessa vaga?
    Vaga: ${jobTitle}
    Descrição: ${jobDescription}
    Data Limite: ${deadline}`)

  if (confirmation) {
    const newVaga = { jobTitle, jobDescription, deadline, candidates: [] }
    vocancies.push(newVaga)
    alert("Vaga criada")
  }
}

function viewVacancy() {
  const indice = Number(prompt("Qual o índice da vaga?"))
  if (isNaN(indice) || indice <= 0 || indice > vocancies.length) {
    alert("Índice inválido.")
    return
  }

  const vacancy = vocancies[indice - 1]
  const candidatesInText = vacancy.candidates.reduce((text, candidate) => {
    return text + `- ${candidate}\n`
  }, "")

  alert(`
    Vaga n° ${indice}
    Nome: ${vacancy.jobTitle}
    Descrição: ${vacancy.jobDescription}
    Data Limite: ${vacancy.deadline}
    Total de candidatos: ${vacancy.candidates.length}
    Candidatos:
${candidatesInText}`)
}

function registerCandidate() {
  const name = prompt("Qual o nome do candidato?")
  const indice = Number(prompt("Qual o índice da vaga para inscrever o candidato?"))
  if (isNaN(indice) || indice <= 0 || indice > vocancies.length) {
    alert("Índice inválido.")
    return
  }

  const vacancy = vocancies[indice - 1]

  const confirmation = confirm(`Você quer inscrever ${name} nessa vaga?
    Vaga n° ${indice}
    Nome: ${vacancy.jobTitle}
    Descrição: ${vacancy.jobDescription}
    Data Limite: ${vacancy.deadline}`)

  if (confirmation) {
    vacancy.candidates.push(name)
    alert(`Candidato ${name} inscrito com sucesso.`)
  }
}

function deleteVacancy() {
  const indice = Number(prompt("Informe o índice da vaga que deseja excluir:"))
  if (isNaN(indice) || indice <= 0 || indice > vocancies.length) {
    alert("Índice inválido.")
    return
  }

  const vacancy = vocancies[indice - 1]

  const confirmation = confirm(`Deseja realmente excluir a vaga?
    Vaga n° ${indice}
    Nome: ${vacancy.jobTitle}
    Descrição: ${vacancy.jobDescription}
    Data Limite: ${vacancy.deadline}`)

  if (confirmation) {
    vocancies.splice(indice - 1, 1)
    alert("Vaga excluída.")
  }
}

function viewMenu() {
  return prompt(
    "Cadastro de Vagas de Emprego\n\n" +
    "Escolha uma opção:\n" +
    "1. Listar vagas disponíveis\n" +
    "2. Criar nova vaga\n" +
    "3. Visualizar uma vaga\n" +
    "4. Inscrever um candidato\n" +
    "5. Excluir uma vaga\n" +
    "6. Sair"
  )
}

function execute() {
  let option = ""
  do {
    option = viewMenu()
    switch (option) {
      case "1":
        showVacancies()
        break
      case "2":
        createNewVacancy()
        break
      case "3":
        viewVacancy()
        break
      case "4":
        registerCandidate()
        break
      case "5":
        deleteVacancy()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }
  } while (option !== "6")
}

execute()