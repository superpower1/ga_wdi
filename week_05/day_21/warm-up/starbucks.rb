class Coffee
  def initialize(*args)
    @type = args[0]
    @sugar = args[1]
    @size = args[2]
    @name = args[3]
    @collected = false
    @ready = false

    Thread.new do
      5.downto(0) do |i|
        sleep 1
      end
      @ready = true
      puts to_s
    end
  end

  def to_s
    "#{@name}'s #{@type}, #{@size}, #{@sugar}"
  end

  def ready?
    if @ready
      if @collected
        puts "It has been collected."
      else
        @name[rand(@name.size)] = 'd'
        puts to_s
        @collected = true
      end
    else
      puts "Not ready!"
    end
  end
end

# c1 = Coffee.new('latte','2 sugars','medium','Darryl')
# .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars."
# puts c1
