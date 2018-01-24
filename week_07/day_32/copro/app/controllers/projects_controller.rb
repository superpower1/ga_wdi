class ProjectsController < ApplicationController

  def new

  end

  def create
    redirect_to '/login' unless session[:user_id]
    project = Project.new
    project.title = params[:title]
    project.user_id = session[:user_id]
    project.preview = params[:preview]
    if project.save
      redirect_to '/'
    else
      render :new
    end
  end

  def show
    
  end

end
