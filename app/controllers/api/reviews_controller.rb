class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    # @resort = Resort.find(params[:review][:resort_id])
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render "api/resorts/#{params.resort_id}"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review
      @review.destroy
      render "api/resorts/#{params[resort_id]}"
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
