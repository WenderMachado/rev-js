class User{
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password){
    if(email === this.email && password  === this.password){
      console.log(`As senhas conferem - email: ${email} é igual a ${this.email}`)
    }else{
      console.log(`não confere`)
    }
  }
}

class Product{
  constructor(name, description, price){
    this.name= name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantities){
    this.inStock += quantities
  }

  calculateDiscount(percent){
    return this.price * ((100 - percent) / 100)
  }
}

const johnDoe = new User("Wender Machado", "Email@gmail.com", "12345")

// johnDoe.login("Email@gmail.com", '12345')
// console.log(johnDoe)

const watch = new Product("appple", "bom relogio", 350)
watch.addToStock(99)
const priceWithDiscount = watch.calculateDiscount(9)

console.log(watch)
console.log(priceWithDiscount)