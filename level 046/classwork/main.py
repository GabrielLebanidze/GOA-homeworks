sia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(sia[4])
print(sia[7])
print(sia[1:10:1])
print(sia[::-1])
print(sia[::4])
print(sia[0:5])
print(sia[1:9:2])
sia[1] = "gabrieli"
print(sia)
sia[2] = "tazo"
print(sia)
sia[1], sia[2] = sia[2], sia[1]
print(sia)