function addPlayer(){
const playerName = document.getElementById('name').value
const playerPosition = document.getElementById('position').value
const playerNumber = document.getElementById('number').value

const confirmacao = confirm(`Confirma a escalação desse jogador?
  Nome: ${playerName} 
  Posição: ${playerPosition}
  Número: ${playerNumber} `)

  if(confirmacao){
    const ul = document.getElementById('team-list')
    const playerEscalado = document.createElement('li')
    playerEscalado.id = 'player-' + playerNumber
    playerEscalado.innerText = `
    Nome: ${playerName} 
    Posição: ${playerPosition}
    Número: ${playerNumber}`

    ul.appendChild(playerEscalado)


  document.getElementById('name').value = ''
  document.getElementById('position').value = ''
  document.getElementById('number').value =''
  }
}

function removePlayer(){
  const numberToRemove = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById('player-' + numberToRemove)

  const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")

  if (confirmation) {
    document.getElementById("team-list").removeChild(playerToRemove)
    document.getElementById("numberToRemove").value = ""
  }
}



addPlayer()
removePlayer()
