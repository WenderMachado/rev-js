const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += `Vaga N° ${indice} - ${vaga.nomeVaga} - ${vaga.candidatos.length} candidato(s)\n`
    return textoFinal
  }, "")
  alert(vagasEmTexto || "Nenhuma vaga cadastrada.")
}

function novaVaga() {
  const nomeVaga = prompt(`Qual o nome da vaga?`)
  const descricao = prompt(`Descrição da vaga:`)
  const dataLimite = prompt(`Insira uma Data Válida:`)

  const confirmacao = confirm(`Confirma a criação dessa vaga:
Vaga: ${nomeVaga}
Descrição: ${descricao}
Data limite: ${dataLimite}`)

  if (confirmacao) {
    const newVaga = {
      nomeVaga,
      descricao,
      dataLimite,
      candidatos: []
    }
    vagas.push(newVaga)
    alert(`Vaga criada com sucesso!`)
  }
}

function visualizarVaga() {
  const indice = prompt(`Qual o número da vaga que deseja visualizar?`)
  const vaga = vagas[indice]

  if (!vaga) {
    alert("Vaga não encontrada.")
    return
  }

  const candidatosTexto = vaga.candidatos.length > 0
    ? vaga.candidatos.join(", ")
    : "Nenhum candidato inscrito."

  alert(`Vaga N° ${indice}
Nome: ${vaga.nomeVaga}
Descrição: ${vaga.descricao}
Data limite: ${vaga.dataLimite}
Candidatos: ${candidatosTexto}`)
}

function inscreverCandidato() {
  const nomeCandidato = prompt(`Qual o nome do candidato?`)
  const indice = prompt(`Qual o número da vaga para inscrição?`)
  const vaga = vagas[indice]

  if (!vaga) {
    alert("Vaga não encontrada.")
    return
  }

  const confirmacao = confirm(`Deseja inscrever ${nomeCandidato} na vaga:
${vaga.nomeVaga} - ${vaga.descricao}?`)

  if (confirmacao) {
    vaga.candidatos.push(nomeCandidato)
    alert("Candidato inscrito com sucesso!")
  }
}

function excluirVaga() {
  const indice = prompt(`Qual o número da vaga que deseja excluir?`)
  const vaga = vagas[indice]

  if (!vaga) {
    alert("Vaga não encontrada.")
    return
  }

  const confirmacao = confirm(`Tem certeza que deseja excluir a vaga:
${vaga.nomeVaga} - ${vaga.descricao}?`)

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert("Vaga excluída com sucesso.")
  }
}

function menu() {
  return prompt(`Menu de Vagas:
1 - Listar Vagas
2 - Criar Vaga
3 - Visualizar Vaga
4 - Inscrever Candidato
5 - Excluir Vaga
6 - Sair`)
}

function executar() {
  let opcao = ""
  do {
    opcao = menu()
    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        visualizarVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
        break
      case "6":
        alert("Encerrando aplicação.")
        break
      default:
        alert("Opção inválida, tente novamente.")
    }
  } while (opcao !== "6")
}

executar()
