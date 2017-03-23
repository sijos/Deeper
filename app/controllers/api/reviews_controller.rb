class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where("resort_id = #{params[:resort_id]}")
    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review
      @review.destroy
      render :show
    else
      render json: ["Review not found"], status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:resort_id, :body, :overall_rating,
      :basic_t_rating, :adv_t_rating, :amenities_rating, :services_rating,
      :value_rating)
  end
end
