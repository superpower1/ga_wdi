require 'pry'

def can_make_word(word)
  letter_blocks = [
    ['B','O'],
    ['X','K'],
    ['D','Q'],
    ['C','P'],
    ['N','A'],
    ['G','T'],
    ['R','E'],
    ['T','G'],
    ['Q','D'],
    ['F','S'],
    ['J','W'],
    ['H','U'],
    ['V','I'],
    ['A','N'],
    ['E','R'],
    ['F','S'],
    ['L','Y'],
    ['P','C'],
    ['Z','M']
  ]
  letters = letter_blocks.flatten
  total = word.length
  counter = 0
  word.each_char do |chr|
    letters.each do |letter|
      if chr.upcase == letter
        counter=counter+1
        index = letters.index(letter)
        if index.even?
          letters.delete_at(index)
          # p letters
          letters.delete_at(index)
          # p letters
        else
          letters.delete_at(index)
          # p letters
          letters.delete_at(index-1)
          # p letters
        end
        break
      end
    end
  end

  if counter == total
    return true
  else
    return false
  end
end

binding.pry
puts 'end'
