require 'pry'
require 'fileutils'

fruits = ['apple', 'orange', 'banana']

fruits.each do |fruit|
  puts "Creating folder #{fruit}"
  # Module name should be camel case
  FileUtils.mkdir fruit

end

binding.pry
# This is necessary for binding.pry to work
puts 'End'
