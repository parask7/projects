# Rock Paper Seccior game

import random

computer = random.choice([-1, 0, 1])
youstr = input("Enter your choice\n1:rock\n2:paper\n3:seccior\n")
youdict = {
    "rock" : -1,
    "paper" : 0,
    "seccior": 1
}
reversdict = {
    -1: "rock",
    0: "paper",
    1: "seccior"
}

you = youdict[youstr]

print(f"your choise {reversdict[you]}\ncomputer choise {reversdict[computer]}")

if(computer == you):
    print("it's a draw")
else:
    if(computer == 1 and you == -1):
        print("you win")
    elif(computer == 1 and you == 0):
        print("you loss")
    elif(computer == -1 and you == 1):
        print("you loss")
    elif(computer == -1 and you == 0):
        print("you win")
    elif(computer == 0 and you == -1):
        print("you loss")
    elif(computer == 0 and you == 1):
        print("you win")
    else:
        print("somthing went wrong")
