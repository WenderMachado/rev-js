module.exports = class Character{
  constructor(name, lifePoints, ptAtk, ptDf){
    this.name = name
    thhis.lifePoints = lifePoints
    this.ptAtk = ptAtk
    this.ptDf = ptDf
  }

    atacking(persona){
      persona.lifePoints -= this.ptAtk - persona.ptDf
  }
}