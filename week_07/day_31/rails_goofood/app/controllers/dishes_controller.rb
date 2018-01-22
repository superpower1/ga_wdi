class DishesController < ApplicationController

  def new

  end

  def show
    dish = Dish.find_by(id: params[:id])
    @name = dish.name
    @img_url = dish.img_url
  end
end
