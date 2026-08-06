class owner {
    #balance;

    static accountsCount = 0

    constructor(name, balance){
        this.name = name
        this.balance = balance
        owner.accountsCount++
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance <= amount? this.balance -= amount : "not enough money"
    }

    #logTransaction(type, amount){
        console.log(type, amount)
    }

    getBalance(){
        return this.#balance
    }

    static getAccountsCount(){
        return accountsCount
    }
}


const acc1 = new owner("gabro", 0)
const acc2 = new owner("sandro", 12)

acc1.deposit(1)
console.log(acc1.balance)
acc1.withdraw(1)
console.log(acc1.balance)