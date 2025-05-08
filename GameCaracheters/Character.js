class Character{
  constructor(name, lifePoints, atack, defense){
    this.name = name
    this.lifePoints = lifePoints
    this.atack = atack
    this.defense = defense
  }
  atackMove(persona){
    persona.lifePoints -= this.atack - persona.defense
    return persona
  }
}

module.exports = Character