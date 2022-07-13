# 1.Date Type of Python
a_string = "Like this"
b_int = 4
c_boolean = True 
d_float = 3.13
e_none = None # '존재하지 않는다'로 null에 가까움

print(type(a_string))  #<class 'str'>
print(type(b_int))     #<class 'int'>
print(type(c_boolean)) #<class 'bool'>
print(type(e_none))    #<class 'NoneType'>
# 변수명 작성 시 구분표시는 '_'를 자주 사용 
# => 이렇게 작성하는 방식을 'snake case'라 한다
#  -> js에서 구분 표시로 대문자를 사용하는 것과 반대


# 2. Sequence Data Type - List&Dict&Tuple
#List - 많은 data를 하나에 저장하고 싶을 때 사용(Array와 유사)
days = ["Mon","Tue","Wed","Thur","Fri"]
print(days)          # []형태
print("Mon" in days) # True(존재여부 확인)
print(days[3])       # Thur
print(len(days))     # 5
# List - Sequence, Mutable(List에 추가나 삭제 가능)
days.append("Sat")   # List에 요소 추가
print(days)           
days.reverse()       # 역순 정렬
print(days)

#Immutable Sequence Data Type - Tuple&Dict
#Tuple - Immutable List
weeks = ("Mon","Tue","Wed","Thur","Fri")
print(type(weeks))   #  <class 'tuple'>

#Dictionary
# List에서 Object를 원하는 경우(JSON형태)면 자주 사용
nico = {
    "name" : "Nico",
    "age" : 29,
    "korean" : True,
    "fav_food" : ["Kimchi","Sashimi"] 
}
print(nico)
print(nico["name"])
print(nico["fav_food"]) # dictionary는 안에 list로 정보 저장이 가능하다
# List, Dictionary, Tuple 모두 Data 저장할 때 서로 다른 유형이라도 저장 가능하다
