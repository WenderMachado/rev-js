const Author = require("./Author")

const wender = new Author("Wender")

const post1 = wender.writePost("Meu primeiro post", "Esse é o conteúdo do post.")
post1.addComment("João", "Muito bom!")
post1.addComment("Maria", "Curti demais!")

console.log(post1)