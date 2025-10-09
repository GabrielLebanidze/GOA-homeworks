def add_numbers(number1, number2):
    return number1+number2


def average(num1, num2, num3):
    return (num1+num2+num3)/3


def max_number(num1, num2):
    if num1>num2:
        return num1
    elif num2>num1:
        return num2


def even_or_odd(number):
    if number % 2 == 0:
        return "luwi"
    else:
        return "kenti"


def sum_list(list):
    jami = 0
    for i in list():
        jami+=i
    return jami

def filter_even(list):
    sia = []
    for i in list():
        if i % 2 == 0:
            sia.append(i)
    return sia

def word_length(word):
    raodenoba = 0
    for i in word:
        raodenoba+=1
    return raodenoba

def longest_word(list):
    return max(list)

def square(num):
    return num*num