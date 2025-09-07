# in ოპერატორი გამოიყენება იმისთვის, რომ კომპიუტერს მივუთითოთ რომელ list-ზე ვაკეთებთ იტერაციას.
num = [1, 2, 3, 4, 5]
for i in num:
    print(i)

names = ["gabriel", "giorgi", "ilia"]
name = input("enter your name here ")
print(name in names)

numbers = [1, 2, 3, 4, 5]
jami = 0
for i in numbers:
    jami += i

numbers1 = [1, 2, 3, 4, 5]
random_num = int(input("enter your number here"))
if random_num in numbers1:
    print("ricxvi aris siashi")
else:
    print("ricxvi araa siashi")