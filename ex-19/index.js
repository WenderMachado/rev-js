const Author = require("./Author");

const john = new Author('John Doe')

const post = john.writePost('titulo', 'content')

post.addComment('Wender', 'Falou besteira')
post.addComment('Carlos', 'Falou coisas boas')

console.log(john)
console.log( post)