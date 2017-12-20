def prompt (*args)
  print *args
  gets.chomp
end

def mars (str)
  arr = str.split(' ')
  arr.each do |item|
    if item.match(/\A[^aeiou]/i)
      item[0] = item[0].downcase
    end
  end
  str = arr.join(' ')
  # a = 4, e = 3, i = 1, o = 0
  str = str.gsub('a', '4').gsub('e', '3').gsub('i', '1').gsub('o', '0')

end

say = prompt("Speak to daniel: ")
while true
  if say.empty?
    puts "Fine. Be that way!"
  elsif say == say.upcase
    puts "Woah, chill out!"
  elsif say.index(/\?$/)
    puts "Sure"
  elsif say.index(/^Bro, /)
    puts mars(say)
  else
    puts "Whatever."
  end
  say = prompt("Speak to daniel: ")
end
