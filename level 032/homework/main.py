# for ციკლის მაგალითები
for i in range(5):
    print(i)

name = "gabrieli"
for i in name:
    print(i)

numbers =[1, 2, 3, 4, 5] 
jami = 0
for i in numbers:
    jami+=i
    print(jami)

# while ციკლის მაგალითები
user_input = int(input("enter your number here "))
while user_input != 4:
    user_input = int(input("try again "))
else:
    print("you won")

adgilebi = 40
while adgilebi > 0:
    print("bileti gaiyida")
    adgilebi = adgilebi - 1

while 1 == 1:
    print("1 udris 1")


empty = []
for i in range(5):
    input1 = int(input("enter your number here "))
    empty.append(input1)

print(empty)
input2 = int(input("enter another number here "))
input2kubshi = input2**3
empty.insert(0, input2kubshi)
print(empty)

for i in range(5, 0, -2):
    empty.pop(i)

print(empty)

empty1 = []
user_input1 = int(input("enter your number here: "))
while user_input1 != 0:
    empty1.append(user_input1)
    user_input1 = int(input("to stop adding numbers enter 0: "))
else:
    empty1.pop()

print(empty1)