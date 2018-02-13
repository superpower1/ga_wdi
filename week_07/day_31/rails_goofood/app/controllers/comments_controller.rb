class CommentsController < ApplicationController

  def api_create
    comment = Comment.new
    comment.content = params[:content]
    comment.dish_id = params[:dish_id]
    comment.save
    render json:{info:'Success'}
  end
end
