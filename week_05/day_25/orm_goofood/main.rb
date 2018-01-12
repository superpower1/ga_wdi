require 'sinatra/reloader'
require 'sinatra'
require_relative 'db_config'
require_relative 'models/dishes'


get '/' do
  @dishes = Dishes.all
  erb :index
end
