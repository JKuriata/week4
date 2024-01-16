import inquirer from "inquirer";

let menu = {
    coffee: 3,
    tea: 2.5,
    latte: 4.5,
    coke: 1.5
}

//two different ways of accessing the key
// console.log(menu.coffee)
// console.log(menu["coffee"])

let menuChoices = Object.keys(menu)
menuChoices.push("-- Go to checkout --")

// console.log(menuChoices)

class CoffeeShop {
    constructor(customerName){
    this.shopName = "Koffee"
    this.name = customerName
    this.total = 0
    this.order = []
    }

    calculateTotal() {
        console.log(`Hello ${this.name}`)
        for(let i = 0; i < this.order.length; i++) {
            console.log(`${this.order[i]} - £${menu[this.order[i]]}`)
            this.total += menu[this.order[i]]
        }
        console.log(`Your total is £${this.total}`)
    }

    set updateOrder(newItem) {
        this.order.push(newItem)
    }
}

//input name
const question = [
    {
        type: "input",
        name: "getName",
        message: "What's your first name?"
    }
]

const nameResponse = await inquirer.prompt(question)


const customer = new CoffeeShop(nameResponse.getName)
// console.log(`Hello ${nameResponse.getName}`)
console.log(customer)


const askForOrder = async () => {
    const takeOrder= await inquirer.prompt([
    {
        type: "list",
        name: "getOrder",
        message: "What would you like to order?",
        choices: menuChoices
    }
])

    if(takeOrder.getOrder === "-- Go to checkout --") {
        // console.log(customer.order)
        customer.calculateTotal()
        return;
    }

    customer.updateOrder = takeOrder.getOrder
    askForOrder()
}

askForOrder()