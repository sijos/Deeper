class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.where("resort_id = #{params[:resort_id]}")
    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    if @photo
      @photo.destroy
      render :show
    else
      render json: ["Photo not found"], status: 404
  end

  private

  def photo_params
    params.reqire(:photo).permit(:resort_id, :url, :caption)
  end
end
