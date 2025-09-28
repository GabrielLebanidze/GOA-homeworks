# return keyword გამოიყენება ფუნქციის შექმნის დროს. ფუნქციის შექმნისას ეს keyword იწერება ბოლოს, return-ის მერე რამეს თუ დაწერ არ შესრულდება. მაგ:
def myfunction(name):
    return name
# ზევით რა ფუნქციაც შევქმენი, იმ ფუნქციის არგუმენტად ნებისმიერ რამეს რომ დავწერ, დააბრუნებს ჩემს მიერ დაწერილ არგუმენტს.


def list(name):
    namravli = 1
    for i in name:
        namravli *= i
    return namravli

name = [1, 2, 3, 4, 5]
print(list(name))

def number(num):
    return num

def number1(num):
    return num

number12 = number1(number(5))
print(number12)