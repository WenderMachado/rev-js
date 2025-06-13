const Character = require("./Character")


module.exports = class Mage extends Character {
  constructor(name, lifepoints, ptAtk, ptDf, magicPts) {
    super(name, lifepoints, ptAtk, ptDf)
    this.magicPts = magicPts
  }

  attack(persona) {
    persona.lifepoints -= (this.ptAtk + this.magicPts) - persona.ptDf
  }

  heal(persona) {
    persona.lifepoints += this.magicPts * 2
  }
}