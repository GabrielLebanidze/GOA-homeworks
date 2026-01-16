def lenclone(name):
    length = 0
    for i in name:
        length += 1
    print(length)

numbers = [1, 2, 3, 4, 5]
lenclone("gabro")
lenclone(numbers)

def findclone(string, letter):
    index = 0
    for i in string:
        if i != letter:
            index += 1
        elif i == letter:
            return index
    return 0

idk = "gabro"
print(findclone(idk, "b"))

def my_range(start, stop, step=1):
    result = []
    i = start
    while i < stop:
        result.append(i)
        i += step
    while i > stop:
        result.append(i)
        i += step
    return result

for i in my_range(6, -1, -1):
    print("x")