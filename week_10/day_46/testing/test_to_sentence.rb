require 'minitest/autorun'
require 'minitest/reporters'

require_relative 'to_sentence'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

class ToSentenceTest < Minitest::Test
    def test_to_sentence
      assert_equal "ruby, js and css", to_sentence(['ruby', 'js', 'css'])
    end

    def test_to_sentence_with_two_element_array
      assert_equal "ruby and css", to_sentence(['ruby', 'css'])
    end

    def test_to_sentence_with_single_element_array
      assert_equal "ruby", to_sentence(['ruby'])
    end

    def test_to_sentence_with_empty_array
      assert_equal "", to_sentence([])
    end
end
