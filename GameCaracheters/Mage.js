const Character = require("./Character.js")

class Mage extends Character{
constructor ( name, lifePoints, atack, defense, magicPoints){
  super(name, lifePoints, atack, defense)
  this.magicPoints = magicPoints
}

  atackMove(persona){
    persona.lifePoints -= (this.atack + this.magicPoints) - persona.defense
    return persona
  }

  healing(persona){
    persona.lifePoints += this.magicPoints + this.magicPoints
  }
}

module.exports = Mage