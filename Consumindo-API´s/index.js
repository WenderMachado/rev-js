const form = document.getElementById('form')
const busca = document.getElementById('busca')
const cepInput = document.getElementById('cep')
const section = document.getElementById('section')

busca.addEventListener('click', handleClick)

function handleClick(event) {
  event.preventDefault()
  const cep = cepInput.value.trim()

  if (cep) {
    buscarCep(cep)
  } else {
    alert('Por favor, digite um CEP válido.')
  }
}

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      if (data.erro) {
        alert("CEP não encontrado!")
      } else {
        const ul = document.createElement('ul')
        const li = document.createElement('li')
   

        li.innerText = `${data.localidade} - ${data.uf}`

        ul.appendChild(li)
        section.append(ul)
      }
    })
    .catch((error) => {
      console.error('Erro ao buscar o CEP:', error)
    })
}

const btcDisplay = document.querySelector('#btc')
async function fetchBtc() {
  try{
    const response = await fetch('https://blockchain.info/ticker')
    const data = await response.json()
    btcDisplay.innerText = (`R$ ${data.BRL.buy}`)
    section.append(btcDisplay)
    console.log(data)
  }catch(error){
    console.log(error)
  }
}
// setInterval(fetchBtc, 5000)
fetchBtc() 