require 'sinatra/reloader'
require 'sinatra'
require 'pg'

get '/' do
  conn = PG.connect(dbname: 'goofood')
  @result = conn.exec('SELECT name,img_url FROM dishes')
  conn.close
  erb :index
end

get '/dishes/list' do
  conn = PG.connect(dbname: 'goofood')
  @result = conn.exec('SELECT * FROM dishes')
  conn.close
  erb :list
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  conn = PG.connect(dbname: 'goofood')
  name = params[:name]
  img_url = params[:img_url]
  sql = "INSERT INTO dishes(name, img_url) VALUES ('#{name}', '#{img_url}')"
  result = conn.exec(sql)
  conn.close
  redirect '/dishes/list'
end

get '/dishes/:id' do
  dish_id = params[:id]
  conn = PG.connect(dbname: 'goofood')
  @result = conn.exec("SELECT name,img_url FROM dishes WHERE id='#{dish_id}'")
  conn.close
  erb :show
end

post '/dishes/:id/delete' do
  dish_id = params[:id]
  conn = PG.connect(dbname: 'goofood')
  result = conn.exec("DELETE FROM dishes WHERE id='#{dish_id}'")
  conn.close
  redirect '/dishes/list'
end
