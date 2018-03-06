def solve(n)
  arr = []
  n.times do |i|
    if i == 0
      arr << [1]
    else
      subArr = []
      (i+1).times do |j|
        upperOne = arr[i-1][j] || 0
        leftOne = subArr[j-1] || 0
        subArr << upperOne + leftOne
      end
      arr << subArr
    end
  end

  p arr

  sum = 0
  arr[n-1].each { |a| sum+=a }
  sum
end

p solve(4)
