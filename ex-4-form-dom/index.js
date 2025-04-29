const form = document.getElementById('devForm')
const addTechBtn = document.getElementById('addTechBtn')
const developers = []
let inputRows =  0

function createLabel(text, htmlFor){
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function createInput(id, value, name, type = "text"){
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  return input
}


addTechBtn.addEventListener('click', () => {
  const stackInputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = "inputRow-" + rowIndex
  newRow.className ='inputRow'


  const labelTitle = createLabel("Tech-Name ", "techName-" + rowIndex)
  const inputTitle = createInput('techName-' + rowIndex, null, 'techName')

  const labelP = createLabel(' Experiência: ')


  const id1 = 'expRadio-' + rowIndex + '.1'
  const expLabel1 = createLabel(' 0-2 anos', id1)
  const expInput1= createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')

  const id2 = 'expRadio-' + rowIndex + '.2'
  const expLabel2 = createLabel('3-4 anos', id2)
  const expInput2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')

  const id3 = 'expRadio-' + rowIndex + '.3'
  const expLabel3 = createLabel('5+ anos', id3)
  const expInput3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')

const removeBtn = document.createElement('button')
removeBtn.type = "button"
removeBtn.innerText= "Remover"

removeBtn.addEventListener("click", ()=>{
  stackInputs.removeChild(newRow)
})

newRow.append(labelTitle, inputTitle, labelP, expLabel1, expInput1, expLabel2, expInput2, expLabel3, expInput3, removeBtn)
stackInputs.append(newRow)

})

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullnameInput = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullnameInput.value, technologies: technologies }
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  fullnameInput.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })

  console.log(developers)
})