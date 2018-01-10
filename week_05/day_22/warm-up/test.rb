require_relative 'grade_school'

s = School.new('school')

s.add('c', 2)
s.add('a', 2)
s.add('k', 2)
s.add('b', 2)
s.add('a', 3)
s.add('a', 1)

puts s.db
puts s.sort
