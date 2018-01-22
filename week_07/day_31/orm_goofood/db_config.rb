require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'goofood',
  username: 'superpower1'
}

ActiveRecord::Base.establish_connection(options)
