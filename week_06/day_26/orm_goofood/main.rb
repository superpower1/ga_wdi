require 'sinatra/reloader'
require 'sinatra'
require_relative 'db_config'
require_relative 'models/dishes'
require_relative 'models/dish_types'
require_relative 'models/comments'
require_relative 'models/users'

# sinatra provide this feature
enable :sessions

helpers do
  def current_user
    Users.find_by(id: session[:user_id])
  end

  def logged_in?
    # Use ! to change a object to boolean
    !!current_user
  end

end

get '/' do
  redirect '/login' unless session[:user_id]
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

post '/comments' do
  comment = Comments.create(
    body: params[:comment],
    dish_id: params[:dish_id]
  )
  redirect "/dishes/#{params[:dish_id]}"
end

get '/login' do
  erb :login
end

post '/session' do
  user = Users.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    # session is a hash
    session[:user_id] = user.id
    redirect '/'
  else
    erb :login
  end
end

delete '/session' do
  session[:user_id] = nil
  redirect '/login'
end
