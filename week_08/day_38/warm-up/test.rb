require_relative 'letter_blocks'

p can_make_word("A")
# => true
p can_make_word("BARK")
# => true
p can_make_word("BOOK")
# => false
p can_make_word("TREAT")
# => true
p can_make_word("COMMON")
# => false
p can_make_word("SQUAD")
# => true
p can_make_word("CONFUSE")
# => true
p can_make_word("BOUGHT")
# => false
