def get_squares(arr)
  result = []
  arr.each do |square|
    if Math.sqrt(square) == Math.sqrt(square).round
      result.push(square)
    end
  end
  result.sort.uniq
end

puts get_squares([4, 1, 16, 1, 10, 35, 22])
