class UsersController < ApplicationController
 
  def index
  end
  
  def create
     user = User.create(userParams)
    if user.save
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      render json: user.errors.as_json(full_messages: true)
    end
  end

  def show
    user = User.find(userShowParams[:id])
    render json: UserSerializer.new(user)
  end

  private

  def userParams
    params.permit(:name, :password)
  end

  def userShowParams
    params.permit(:id)
  end

end
