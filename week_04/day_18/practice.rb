require 'pry'

def letter_counter (word)
  result = {}
  word.each_char do |chr|
    if result.has_key? chr
      result[chr] += 1
    else
      result[chr] = 1
    end
  end
  result
end

binding.pry

letter_counter('apple')
