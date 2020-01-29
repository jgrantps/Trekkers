class SessionsController < ApplicationController
  def create
    user = User.find_by(:name => sessionsParams[:name])
    
   

    if user && user.authenticate(sessionsParams[:password])
      session[:user_id] = user.id
     render json: {message: user}
    else
      render json: {message: user}
    end
  end

  def destroy
    reset_session
  end

  private

  def sessionsParams
    params.permit(:name, :password)
  end

end
