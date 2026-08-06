// setinterval არის ფუნქცია, რომელსაც გადაეცემა 2 არგუმენტი: callback function და დრო, რომელიც მილიწამებში იწერება. რაღაც ფუნქცია ყოველ გადაცემულ მილიწამში გაეშვება.
// clearinterval ფუნქციაა, რომელიც setinterval-ს აჩერებს

let count = 0

const idk = setInterval(() => {
    count += 1
    console.log(count)
    if (count == 10){
        clearInterval(idk)
    }
}, 1)