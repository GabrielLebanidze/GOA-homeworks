class Animal{
    constructor(name, speed){
        this.name = name
        this.speed = speed
    }

    get info(){
        return `name: ${this.name}, speed: ${this.speed}`
    }

    set changeSpeed(newSpeed){
        this.speed = newSpeed
    }

    move(){
        console.log(`this animal can move ${this.speed}km/h`)
    }
}


class Bird extends Animal{
    constructor(name, speed, wingSpan){
        super(name, speed)
        this.wingSpan = wingSpan
    }

    fly(){
        console.log(`this bird can fly ${this.speed}km/h and has ${this.wingSpan}m long wings`)
    }
}

let bird = new Bird("eagle", 100, 2)

bird.fly()
bird.move()