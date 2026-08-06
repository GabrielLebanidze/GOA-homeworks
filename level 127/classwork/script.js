class car{
    constructor(model, year, price){
        this.model = model
        this.year = year
        this.price = price
    }
    printCarDetails(){
        console.log(`model: ${this.model}, year: ${this.year}, price: ${this.price}`)
    }
}

let idk = new car("toyota", 2010, 19232198381299812)

idk.printCarDetails()