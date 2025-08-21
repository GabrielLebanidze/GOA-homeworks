# არგუმენტი არის ის, რასაც ფუნქციის ფრჩხილებში ვწერთ.
# range ფუნქცია გამოიყენება for loop-ში, ნიშნავს დიაპაზონს. თუ range-ში მხოლოდ ერთ რიცხვს დავწერთ, შედეგი იქნება ჩაწერილ რიცხვამდე ჩამონათვალი. თუ range-ში 2 რიცხვს ჩავწერთ,
# პირველი რიცხვიდან მეორე რიცხვამდე ყველა მთელი რიცხვი დაიწერება. ხოლო 3 რიცხვს თუ დავწერთ, პირველი რიცხვიდან მეორე რიცხვამდე ყველა მთელი რიცხვი ჩამოითვლება, მოცემული რიცხვების გამოტოვებით.
# მაგ:
# for i in range(5):
#     print(i)

# for i in range(1,6):
#     print(i)

# for i in range(1,6,2):
#     print(i)
jami=0
for i in range(50,101):
    jami+=i
    print(jami)

jami1=0
for i in range(100,200):
    jami1+=i
    print(jami1)

# for და while ციკლებს შორის განსხვავებაა, ის რომ for ციკლში ვიცით რამდენი იტერაცია გვჭირდება და while ციკლში არა.
number=1
while number<=10:
    print(number)
    number+=1

number1=int(input("Enter your number here "))
while number1!=5:
    number1=int(input("Wrong number "))
else:
    print("You win!")