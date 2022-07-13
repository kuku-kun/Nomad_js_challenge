# 1.조건문
def plus(a,b):
    if a>b:
        return a
    elif a==b:
        return "same"
    else:
        return b

# 2.and/or
def Old(age):
    print(f'you are {age} years old') 
    if age < 18:
        print("you can't drink")
    elif age == 18 or age == 19:
        print("you're adult")
    elif age > 20 and age < 25:
        print("you're still kind of young")
    else:
        print("Enjoy your drink")
print(plus(4,4))
Old(18)
Old(19)

# 3.반목문
days = ("Mon","Tue","Wed","Thu","Fri")
for x in days: #이 반복문은 list, tuple에서도 비슷한 방식으로 사용된다
    #여기서 x는 변수
    #       days는 array명[1~]
    if x is "Wed":
        break
    else:
        print(x) #days의 item이 변수x로부터 나온다
# 결과:Mon, Tue가 나오고 Wed가 나오면서 break에 의해 반복문이 중단된다

# 4.Module
#기본 내장된 함수가 아닌 다른 사람의 코드가 있는 것에서 받아 사용시 import 사용
# module: 기능 집합

# print(math.ceil(1.2))하면 안 뜸. 원래 숫자 올림함
# 위에 import math 써야 함

# import math
# print(math.ceil(1.2))

# 전부 import 하는 건 비효율적. import math는 패스.
# 그래서 from math import ceil, fsum 쪽이 더 효율적.
# import fsum as boom 으로 이름 바꿀 수도 있음
# 그러면 print(boom([1,2,3,4,5])로 바꿔야 함
# 다른 파일에서 정의한 함수를 가져올 수도 있음.
# from caculator import plus (지난번에 만든 계산기)

