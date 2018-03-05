def solve(n)
  arr = []
  if n == 1
    return 1
  end

  n.times do |i|
    if i==(n-1) || i==(n-2)
      arr << solve(n-1)
    else
      arr << solve(i+2) - solve(i+1)
    end
  end

  sum = 0
  arr.each { |a| sum+=a }
  sum

end

p solve(2)
