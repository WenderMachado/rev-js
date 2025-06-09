let word = prompt (`insira uma palavra`)
let inversalWord = ''


for(let i = word.length -1; i >=0 ;i--){
  inversalWord += word[i]

}

if(word === inversalWord)alert(`é um palindromo ${word} é = a ${inversalWord}`)
else alert (`não é, ${word} != ${inversalWord}`)
