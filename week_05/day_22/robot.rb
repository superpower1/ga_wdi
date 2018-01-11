class Robot
  def initialize
    @name = random_name
    @mac_address = random_mac
    @instraction_num = 0
    @start_time = @create_time = Time.now
  end

  def random_name
    (('1'..'9').to_a+('a'..'z').to_a).shuffle[0,4].join.upcase
  end

  def random_mac
    6.times.map { '%02x' % rand(0..255) }.join(':').upcase
  end

  def name
    increase_instruction_number
    @name
  end

  def reset
    increase_instruction_number
    @start_time = Time.now
    @name = random_name
  end

  def increase_instruction_number
    @instraction_num += 1
  end

  def instruction_count
    increase_instruction_number
    @instraction_num-1  
  end

  def timers
    boot_time = Time.now.to_i - @start_time.to_i
    create_time = Time.now.to_i - @create_time.to_i
    puts "#{boot_time} seconds since last boot, #{create_time} seconds since creation"
  end
end
