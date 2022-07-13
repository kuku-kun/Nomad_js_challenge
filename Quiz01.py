days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

def is_on_list(list,item):
  return item in list
  
def get_x(list,item):
  return list[item]
  
def add_x(list,item):
  list.append(item)
  
def remove_x(list,item):
  list.remove(item)

print("Is Wed on 'days' list?", is_on_list(days, "Wed"))

print("The fourth item in 'days' is:", get_x(days, 3))

add_x(days, "Sat")
print(days)

remove_x(days, "Mon")
print(days)
