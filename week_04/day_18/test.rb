require 'pry'

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

def common_favor_num (users)
  arr_of_same = users.values[0][:favorite_numbers]
  users.each do |user, value|
    # binding.pry
    arr_of_same = arr_of_same & value[:favorite_numbers]
  end
  arr_of_same
end

def even_favor_num (users, name)
  users[name][:favorite_numbers].select(&:even?)
end

def all_favor_num (users)
  arr_of_all_favor_num = []
  users.each do |user, value|
    arr_of_all_favor_num += value[:favorite_numbers]
  end
  arr_of_all_favor_num.sort.uniq
end

binding.pry
new_arr = common_favor_num(users)
