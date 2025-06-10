let fila = []
let menu = ""

do {
  let patiets = ''
  for (let i = 0; i <fila.length; i++) {

     patiets += `${i + 1} - ${fila[i]} \n`



      }
  menu = prompt (`Lista de espera, pacientes na fila ${fila.length} :
    ${patiets}
    escolha uma das opções:
    1-Adicionar Paciente a fila
    2-Consultar Paciente
    3-Sair`)

    switch(menu){
      case "1":
      let newPatient = prompt (`Insira o nome do paciente:`)
      fila.push(newPatient)
      alert(`O paciente ${newPatient} foi adicionado ao fim da fila`)
      break
      case "2":
      let patientRemoved = fila.pop()

      if (!patientRemoved) {
        alert("Não há pacientes na fila!")
      } else {
         alert(`O paciente ${patientRemoved } foi removido da fila`)
      }
      break
      case "3":
      alert("Encerrando...")
      break
     default:
      alert("Opção inválida!")
       break
    }

}while(menu!== "3")