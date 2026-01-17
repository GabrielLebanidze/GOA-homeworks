def idk():
    nothing = 0
    list = []
    for i in range(1, 100):
        if i % 3 == 0 and i % 5 == 0:
            nothing += 1
        elif i % 3 == 0 and i % 5 != 0:
            list.append(i)
        elif i % 3 != 0 and i % 5 == 0:
            list.append(i)
    return list

print(idk())

def primechecker(n):
    if n <=1:
        return False
    for i in range(2, int(n**0.5+1)):
        if n % i == 0:
            return False
    return True

def primes(n):
    sia = []
    for i in range(1, n+1):
        if primechecker(i) == True:
            sia.append(i)
    return sia

print(primes(100))

kenti = 0
luwi = 0

for i in range(50, 150):
    if i % 2 == 0:
        luwi += i
    elif i % 2 != 0:
        kenti += i
print(kenti)
print(luwi)

def sia(g, b, r, t, y):
    return [g, b, r, t, y]

print(sia(1, 2, 3, 4, 5))