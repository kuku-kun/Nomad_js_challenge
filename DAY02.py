#Function
#내장함수 - print(),len(),...
age = "18"
print(type(age))   #<class 'str'>
n_age = int(age)
print(type(n_age)) #<class 'int'>

#Creating Function
def say_hello():{
    print("hello")
    # Python은 들여쓰기 중요 
    # => 이유: 들여쓰기로 영역(body)를 구분하며 이는 에러 발생의 주된 요인이 된다
}
say_hello() #여기서 '함수명()'으로 해야 작동된다

#Function Arguments
def plus(a,b):
    return a + b
def minus(a,b=9):
    #여기서 9는 default value
    return a - b
    print("abc") # return이 함수를 종료하여 출력되지 않음
result_add = plus(2,4)
result_minus = minus(3) 
print(result_add,result_minus)

#Keyworded Arguments
def say_Old(name,age):
    return f"Hello {name} you are {age} years old" #"Hello "+name+" you are "+age+" years old"과 동일
    #여기서 f는 format으로 변수를 넣기 위해서는 앞에 작성해야 한다


hello = say_Old(age="12", name="nico") #hello = say_Old("nico","12")
print(hello)

