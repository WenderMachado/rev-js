
class User{
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
    
  }

  loguin(email, password){
    if(email === this.email && password === this.password){
      console.log(`O email e senha conferem:
        Email:${email} é igual a ${this.email}`)

    }else{
      console.log(`não conferem`)
    }
  }
}

class Product{
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity){
    this.inStock += quantity
  }

  calculateDiscount(percent){
    return this.price * ((100 - percent) / 100)
  }
}

const johnDoe = new User('Wender', "wender@", "123")
johnDoe.loguin("wender@", "123")
console.log(johnDoe)