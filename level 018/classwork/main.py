number = int(input("enter your number here "))

if number < 10:
    print(str(number) + " არის 10-ზე ნაკლები")
elif number < 20:
    print(str(number) + " არის 20-ზე ნაკლები")

number1 = int(input("enter your number here "))

if number1 % 2 == 0:
    print("the number is even")
else:
    print("the number is odd")

weather = input("enter your weather here ")

if weather == "მზიანი":
    print("ვივარჯიშებ გარეთ")
elif weather == "წვიმიანი":
    print("ვივარჯიშებ გარეთ")
else:
    print("არ ვივარჯიშებ დღეს")

for i in range(3):
    name = input("enter a name here ")
    print(name)