# boolean არის data type, რომელსაც 2 შედეგი აქვს, true ან false.
# binary code არის კოდი, რომელსაც კომპიუტერი იყენებს. binary code არის 0 და 1. 0 = false. 1 = true
# შედარების ოპერატორებია: > (მეტია), <(ნაკლებია), ==(უდრის), !=(არ უდრის), >=(მეტია ან უდრის), <=(ნაკლებია ან უდრის). მაგ:
# 2>1, 1<2, 1==1, 1!=2, 1>=1, 4<=5.
# print(1<5 and 5==5)
# print(6>=7 or 5!=1)
# print(7>4 or 5<=6)
# print(True or 5==4)
# print(False and 54>=2)

number = int(input())
if number % 2 == 0 or number % 5 == 0:
    print(True)
else:
    print(False) 