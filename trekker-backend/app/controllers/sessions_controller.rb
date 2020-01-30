class SessionsController < ApplicationController
   skip_before_action :verified_user, raise: false

  
  def create
    
    user = User.find_by(:name => sessionsParams[:name])
    if user && user.authenticate(sessionsParams[:password])
      session[:user_id] = user.id
     render json: UserSerializer.new(user)
    else
      render json: {message: "Login Failed, Please Try Again!"}
    end
  end

  def destroy
    reset_session
    render json: {message: "you are logged out"}
  end

  private

  def sessionsParams
    params.require(:session).permit(:name, :password)
  end

end
