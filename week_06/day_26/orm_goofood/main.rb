require 'sinatra/reloader'
require 'sinatra'
require_relative 'db_config'
require_relative 'models/dishes'
require_relative 'models/dish_types'
require_relative 'models/comments'


get '/' do
  @dishes = Dishes.all
  erb :index
end

get '/dishes/new' do
  @types = DishTypes.all
  erb :new
end

get '/dishes/:id' do
  @dish = Dishes.find(params["id"])
  @type = DishTypes.find(@dish.dish_type)
  @comments = Comments.where(dish_id: params["id"])
  erb :show
end

get '/dishes/:id/edit' do
  @dish = Dishes.find(params["id"])
  erb :edit
end

post '/dishes' do
  Dishes.create(
    name: params[:name],
    img_url: params[:img_url],
    dish_type: params[:type]
  )
  redirect '/'
end

delete '/dishes/:id' do
  dish = Dishes.find(params[:id])
  dish.destroy
  redirect '/'
end

put '/dishes/:id' do
  dish = Dishes.find(params[:id])
  dish.name = params[:name]
  dish.img_url = params[:img_url]
  dish.save
  redirect "/dishes/#{params[:id]}"
end
