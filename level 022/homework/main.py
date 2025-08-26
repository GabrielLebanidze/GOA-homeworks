number = 5 # გამოსაცნობი რიცხვი არის 5.
attempt = 3 # 3 მცდელობა
user_input = "" # მომხმარებლის რიცხვი

while user_input != number and attempt > 0: # როცა მომხმარებლის რიცხვი არ უდრის 5-ს და ცდები ნულზე მეტია, მომხმარებელს კიდევ მიეცემა input და მცდელობა 1-ით დაიკლებს.
    user_input = int(input("Guess the number between 1-10: "))
    attempt -= 1
    
    if user_input == number: # თუ მომხმარებელმა სწორი რიცხვი შემოიტანა, დაბეჭდავს "You win!"
        print("You win!")
    elif attempt == 0: # სხვა შემთხვევაში თუ მცდელობა აღარ აქვს მომხმარებელს, დაბეჭდავს "You lose!"
        print("You lose!")
    else: # სხვა შემთხვევაში დაბეჭავს "Wrong number!" და "You still have " რამდენი ცდაც აქვს დარჩენილი მომხმარებელს " tries"
        print("Wrong number!")
        print("You still have " + str(attempt) + " tries")