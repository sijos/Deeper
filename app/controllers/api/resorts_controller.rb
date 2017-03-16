class Api::ResortsController < ApplicationController
  def index
    @resorts = Resort.all
    render :index
  end

  def show
    @resort = Resort.find(params[:id])
    render :show
  end
end
