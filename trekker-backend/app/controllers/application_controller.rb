class ApplicationController < ActionController::API
  
  before_action(verified_user)

   private

  def verified_user
    render json: {message: "You are not verified!"} unless user_is_authenticated
  end

  def user_is_authenticated
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(:id => session[:user_id])  
  end

end
