require 'sinatra/reloader'
require 'sinatra'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/author' do
  erb :author, :layout => false
end

get '/signed_up' do
  # check if the email is already exist
  is_existed = false
  existed_emails = File.readlines('emails.txt')
  existed_emails.each do |email|
    if email.chomp == params[:email]
      is_existed= true
    end
  end

  if !is_existed
    # The second param 'a' tells it to append instead of overwrite
    file = File.open("emails.txt", "a")
    file.puts(params[:email])
    file.close
  end
  
  erb :signed_up
end

get '/emails' do
  @list = File.readlines('emails.txt')
  erb :emails
end
