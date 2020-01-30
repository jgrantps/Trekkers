class SessionsController < ApplicationController
  
  
  def create
    
    user = User.find_by(:name => sessionsParams[:name])
    if user && user.authenticate(sessionsParams[:password])
      session[:user_id] = user.id
     render json: UserSerializer.new(user)
    else
      render json: {message: "failed to authenticate"}
    end
  end

  def destroy
    reset_session
  end

  private

  def sessionsParams
    params.require(:session).permit(:name, :password)
  end

end
