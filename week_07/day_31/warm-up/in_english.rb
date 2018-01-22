class Say
  def initialize(num)
    @int = num
  end

  def in_english
    if @int>99||@int<0
      raise ArgumentError.new("Number must be between 0 and 99, inclusive.")
    else

    end
    numbers_to_name = {
        90 => "ninety",
        80 => "eighty",
        70 => "seventy",
        60 => "sixty",
        50 => "fifty",
        40 => "forty",
        30 => "thirty",
        20 => "twenty",
        19=>"nineteen",
        18=>"eighteen",
        17=>"seventeen",
        16=>"sixteen",
        15=>"fifteen",
        14=>"fourteen",
        13=>"thirteen",
        12=>"twelve",
        11 => "eleven",
        10 => "ten",
        9 => "nine",
        8 => "eight",
        7 => "seven",
        6 => "six",
        5 => "five",
        4 => "four",
        3 => "three",
        2 => "two",
        1 => "one"
      }
    str = ""
    numbers_to_name.each do |num, name|
      if @int == 0
        return 'zero'
      elsif @int.to_s.length == 1 && @int/num > 0
        return str + "#{name}"
      elsif @int/num > 0
        return str + "#{name}" if @int%num == 0
        return str + "#{name}-" + numbers_to_name[@int%num]
      end
    end
  end

end

puts Say.new(0).in_english
puts Say.new(9).in_english
puts Say.new(14).in_english
puts Say.new(50).in_english
puts Say.new(98).in_english
# puts Say.new(-1).in_english
# puts Say.new(100).in_english
