class Coffee
  def initialize(*args)
    @type = args[0]
    @sugar = args[1]
    @size = args[2]
    @name = args[3]
  end

  def to_s
    "#{@name}'s #{@type}, #{@size}, #{@sugar}"
  end

  def ready?
    @name[rand(@name.size)] = 'd'
    puts to_s
  end
end

c1 = Coffee.new('latte','2 sugars','medium','Darryl')
# .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars."
puts c1
c1.ready?
