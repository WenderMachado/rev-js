function addPlayer(){
  const position = document.getElementById('position').value
  const number = document.getElementById('number').value
  const name = document.getElementById('name').value

  const confirmation = confirm(`Você deseja adicionar esse player?
    Nome: ${name}
    Número: ${number}
    Posição: ${position}`)

    if(confirmation){
      const ulTeam = document.getElementById('team-list')
      const liPlayer = document.createElement('li')

      liPlayer.innerText = `
      Nome: ${name}
      Número: ${number}
      Posição: ${position}`
      liPlayer.id = "player-" + number

      ulTeam.append(liPlayer)
    }
   
  document.getElementById('position').value = ''
  document.getElementById('number').value = ''
  document.getElementById('name').value = ''
   

}

function removePlayer(){
  const number = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById("player-" + number)


  
  const confirmation = confirm(`Remover:
    ${playerToRemove.innerText}?`)

  if (confirmation) {
    document.getElementById("team-list").removeChild(playerToRemove)
    document.getElementById("numberToRemove").value = ""
  }
}