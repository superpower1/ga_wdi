class Monkey
  def initialize(name, species)
    @name = name
    @species = species
    @foods_eaten = []
  end

  def eat(food)
    @foods_eaten.push(food)
  end

  def introduce
    puts "My name is #{@name}, belong to #{@species}. I eat #{@foods_eaten.join(", ")}."
  end
end
