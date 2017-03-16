class Api::ResortsController < ApplicationController
  def index
    @resorts = Resort.all
    render :index
  end
end
