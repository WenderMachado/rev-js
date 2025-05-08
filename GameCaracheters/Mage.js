const Character = require("./Character.js")

class Mage extends Character{
constructor ( name, lifePoints, atack, defense, magicPoints){
  super(name, lifePoints, atack, defense)
  this.magicPoints = magicPoints
}

  atackMove(persona){
    persona.lifePoints -= (this.atack + this.magicPoints) - this.defense
    return persona
  }

  healign(persona){
    persona.lifePoints += this.magicPoints + this.magicPoints
  }
}
