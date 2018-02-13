def to_sentence(arr)
  # if arr.count == 1
  #   return arr.first
  # end
  # last = arr.pop
  # arr.join(', ') + " and #{last}"

  case arr.length
  when 0
    ""
  when 1
    arr.first
  when 2
    arr.join(' and ')
  else
    "#{arr[0..-2].join(', ')} and #{arr.last}"
  end
end
