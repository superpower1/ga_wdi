# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10

require 'pg'

class Scrabble
  def self.score(word)
    conn = PG.connect(dbname: 'my_database')
    score = 0

    word.each_char do |chr|
      result = conn.exec("SELECT value FROM letter_values WHERE letter='#{chr.upcase}'")
      score += result[0]['value'].to_i
    end

    conn.close
    score

  end
end
