for i in range(10):
    print("Gabriel Lebanidze")

number1 = int(input("enter your first number here "))
number2 = int(input("enter your second number here "))
number3 = int(input("enter your third number here"))
number4 = int(input("enter your fourth number here "))
number5 = int(input("enter your fifth number here "))
for i in range(1):
    print((number1 + number2 + number3 + number4 + number5)/5)

# if არის keyword, რისი საშუალებითაც ვაძლევთ კომპიუტერს საშუალებას, რომ მიიღოს გადაწყვეტილება. მაგ: თუ რამე არის true, ქენი ეს.
if number1 == 1:
    print("your number is 1")

# else არის keyword, რომელიც გამოიყენება if-ის შემდეგ. სხვა შემთხვევაში ქენი ეს. მაგ:
if number2 == 2:
    print("your number is 2")
else:
    print("your number isn't 2")

# elif არის keyword, ნიშნავს სხვა შემთხვევაში თუ. გამოიყენება if-ის შემდეგ. მაგ:
if number3 == 3:
    print("your number is 3")
elif number3 == 4:
    print("your number is 4")