require_relative "balance_word"
require 'pry'

require 'minitest/autorun'

class BalanceWordTest < Minitest::Test
  def test_word
    assert_equal "S T EAD - 19", balance_word('STEAD')
  end
end

binding.pry
puts 'end'
