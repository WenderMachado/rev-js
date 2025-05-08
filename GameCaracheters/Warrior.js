const Character = require("./Character.js")

class Warrior extends Character {
  constructor(name, lifepoints, attackPts, defensePts, shieldPts) {
    super(name, lifepoints, attackPts, defensePts)
    this.shieldPts = shieldPts
    this.stance = 'attacking'
  }

  atackMove(persona) {
    if (this.stance === 'attacking') {
      super.atackMove(persona)
    }
  }

  switchStance() {
    if (this.stance === 'attacking') {
      this.stance = 'defending'
      this.defensePts += this.shieldPts
    } else {
      this.stance = 'attacking'
      this.defensePts -= this.shieldPts
    }
  }
}
module.exports = Warrior