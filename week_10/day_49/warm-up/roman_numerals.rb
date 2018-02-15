def to_roman_numeral(num)
  if num.to_i >= 1000
    num = "M" + to_roman_numeral(num.to_i-1000).to_s
  elsif num.to_i >= 500
    num = "D" + to_roman_numeral(num.to_i-500).to_s
  elsif num.to_i >= 100
    num = "C" + to_roman_numeral(num.to_i-100).to_s
  elsif num.to_i >= 50
    num = "L" + to_roman_numeral(num.to_i-50).to_s
  elsif num.to_i >= 10
    num = "X" + to_roman_numeral(num.to_i-10).to_s
  elsif num.to_i >= 5
    num = "V" + to_roman_numeral(num.to_i-5).to_s
  elsif num.to_i >= 1
    num = "I" + to_roman_numeral(num.to_i-1).to_s
  else
    ""
  end
end

# change IIII to IV, which means VIIII will change to VIV
def filter1(string)

end

# change VIV to IX
def filter2(string)

end

puts to_roman_numeral(47)
