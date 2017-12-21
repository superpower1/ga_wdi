# Print out all the leap years in the last 100 years.
#
# For numbers between 0 and 200:
# a) print out multiples of 7.
# b) print out every second odd number.
# c) print out all prime numbers.

require 'pry'
require 'date'
require 'prime'

this_year = DateTime.now.year
start_year = this_year - 100

def print_leap_year(start_year)
  this_year = DateTime.now.year
  (start_year..this_year).to_a.select{ |year| Date.leap?(year) }
end

leap_arr = print_leap_year(start_year)

def multiples(range, num)
  range.to_a.select { |num| num%7==0 }
end

def every_second_odd(range)
  result = []
  range.to_a.select(&:odd?).each_with_index do |num, index|
    if index%2==0
      result.push(num)
    end
  end
  result
end

def get_prime(max_num)
  Prime.take(max_num)
end

multi_7_arr = multiples(0..200, 7)
second_odd = every_second_odd(0..200)
prime_num = get_prime(200)

binding.pry
puts "End"
