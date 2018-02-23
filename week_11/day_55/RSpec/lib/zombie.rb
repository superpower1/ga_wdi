class Zombie
  attr_accessor :name, :brains_eaten

  def initialize(name="Frank")
    @name = name
    @brains_eaten = 0
  end

  def eat_brains
    @brains_eaten += 1
  end

  def hungry?
    @brains_eaten < 5
  end

  def full?
    @brains_eaten >= 5
  end
end
