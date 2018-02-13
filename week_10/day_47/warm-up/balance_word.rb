def letter_value(letter)
  letter.upcase.ord - 64
end

def is_balance(word, char)
  if word.include?(char)
    breakpoint_index = word.index(char)
    left_hand_value = 0
    right_hand_value = 0
    word.each_char do |chr|
      distance = word.index(chr) - breakpoint_index
      chr_value = distance * letter_value(chr)
      if distance>0
        left_hand_value += chr_value
      end
      if distance<0
        right_hand_value += chr_value
      end
    end
    if (left_hand_value+right_hand_value) == 0
      return left_hand_value
    else
      return false
    end
  else
    return false
  end
end

def balance_word(word)
  word = word.upcase
  result = {}
  word.each_char do |chr|
    if value = is_balance(word, chr)
      breakpoint_index = word.index(chr)
      puts "#{word[0..(breakpoint_index-1)]} #{chr} #{word[(breakpoint_index+1)..-1]} - #{value}"
      result.balance_point = breakpoint_index
      result.value = value
    end
  end
  if result
    return result
  else
    return false
  end
end
