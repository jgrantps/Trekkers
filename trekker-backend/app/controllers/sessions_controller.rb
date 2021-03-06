class SessionsController < ApplicationController
  #  skip_before_action :verified_user, raise: false

  
  def create
    
    user = User.find_by(sessionsParams)
    
    if !!user
       
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
