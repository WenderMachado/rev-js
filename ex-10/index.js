const vocancies = []
const options = ""

function showVacancies(){
  const vacanciesInText = vocancies.reduce((finalText, vacancy, index,)=>{
   finalText += `Vagas: 
    ° - ${index + 1}
    ${vacancy.name}
    ${vocancies.candidates.lenght}`

    return finalText
  }, "")

  alert(vacanciesInText)
}

function createNewVacancy(){
  const jobTitle = prompt (`Insira o nome da vaga que deseja adicionar`)
  const jobDescription = prompt (`Insira uma descrição para essa vaga`)
  const deadline = prompt(`qual a data limite par essa vaga - DD/MM/YYYY`)

  const confirmation = confirm(`Você confirma a criação dessa vaga?
    Vaga: ${jobTitle}
    Descrição: ${jobDescription}
    Data Limite: ${deadline}`)

    if(confirmation){
      const newVaga = {jobTitle, jobDescription, deadline, candidates: [] }

      vocancies.push(newVaga)
      alert(`Vaga criada`)
    }
}

function viewVacancy (){
  
}