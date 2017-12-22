require 'sinatra'
require 'sinatra/reloader'
require 'weather-api'

get '/home' do
  res = Weather.lookup_by_location('Melbourne, Australia', Weather::Units::CELSIUS)
  @title = res.title
  @temp = res.condition.temp
  @text = res.condition.text
  @desc = res.description
  erb(:home)
end

get '/contact' do
  erb(:contact)
end

get '/about' do
  erb(:about)
end
