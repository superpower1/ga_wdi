class Dice
  @@dice = [
    "-----\n|   |\n| * |\n|   |\n-----",
    "-----\n|*  |\n|   |\n|  *|\n-----",
    "-----\n|*  |\n| * |\n|  *|\n-----",
    "-----\n|* *|\n|   |\n|* *|\n-----",
    "-----\n|* *|\n| * |\n|* *|\n-----",
    "-----\n|* *|\n|* *|\n|* *|\n-----"
  ]

  def self.roll(num)
    arr = []
    num.times do
      arr.push(rand(6)+1)
    end
    arr
  end

  def self.pretty_roll
    @@dice.sample
  end
end
