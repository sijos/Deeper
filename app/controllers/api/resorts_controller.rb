class Api::ResortsController < ApplicationController
  def index
    @resorts = Resort.all
    render :index
  end

  def show
    @resort = Resort.find(params[:id])
    @avg_rating = @resort.avg_rating
    render :show
  end
end
