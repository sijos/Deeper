class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])
    if @user
      login(@user)
      render "api/index"
    else
      render json: ["Invalid Username or Password"], status: 401
    end
  end

  def destroy
    logout
    render "/"
  end
end
