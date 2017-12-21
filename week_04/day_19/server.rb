require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb(:index)
end

get '/ask' do
  "Hello, #{params[:name]}"
end
