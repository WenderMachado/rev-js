class Character{
  constructor(name, lifePoints, atack, defense){
    this.name = name
    this.lifePoints = lifePoints
    this.atack = atack
    this.defense = defense
  }
  atackMove(persona){
    persona.lifePoints -= this.atack - this.defense
    return persona
  }
}

module.exports = Character