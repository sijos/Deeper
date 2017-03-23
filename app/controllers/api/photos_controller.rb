class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.where("resort_id = #{params[:resort_id]}")
    render :index
  end

  def create

  end
end
