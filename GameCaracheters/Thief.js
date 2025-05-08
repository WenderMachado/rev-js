const Character = require("./Character.js")

class Thief extends Character{
constructor ( name, lifePoints, atack, defense){
  super(name, lifePoints, atack, defense)
}

  atackMove(persona){
    persona.lifePoints -= (this.atack * 2) - this.defense
    return persona
  }
}

module.exports = Thief