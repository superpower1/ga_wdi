require 'pry'

def init_poker
  suits = 'Hearts,Diamonds,Spades,Clubs'.split(',')
  faces = 'Ace,2,3,4,5,6,7,8,9,10,Jack,Queen,King'.split(',')
  poker = []
  suits.each do |suit|
    faces.each do |face|
      poker << "#{face} of #{suit}"
    end
  end
  poker
end

def start_game
  print "How many players (2-8) ?"
  cpu_num = gets.to_i - 1

  poker = init_poker
  player_hand = [poker.delete(poker.sample), poker.delete(poker.sample)]

  cpu_players_hand = []
  cpu_num.times do
    cpu_players_hand << [poker.delete(poker.sample), poker.delete(poker.sample)]
  end

  flop = []
  3.times do
    flop << poker.delete(poker.sample)
  end
  turn = poker.delete(poker.sample)
  river = poker.delete(poker.sample)

  binding.pry

  puts "Your hand: #{player_hand.join(', ')}"
  cpu_num.times do |index|
    puts "CPU #{index+1} Hand: #{cpu_players_hand[index].join(', ')}"
  end
  puts "Flop: #{flop.join(', ')}"
  puts "Turn: #{turn}"
  puts "River: #{river}"

end


binding.pry

puts 'end'
