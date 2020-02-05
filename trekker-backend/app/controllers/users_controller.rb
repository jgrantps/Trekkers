class UsersController < ApplicationController
 
  def index
  end
  
  def create
     user = User.create(userParams)
    if user.save
      session[:user_id] = user.id
      render json: UserSerializer.new(user)
    else
      render json: {main: user.errors.as_json(full_messages: true), reason: "error!"}
    end
  end

  def show
    user = User.find(userShowParams[:id])
    render json: UserSerializer.new(user), :methods => :message
  end

  private

  def userParams
    params.permit(:name, :password)
  end

  def userShowParams
    params.permit(:id)
  end

end
