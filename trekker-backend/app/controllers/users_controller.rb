class UsersController < ApplicationController

  def index
  end
  
  def create
    if User.find_by(:name => userParams[:name])
      redirect_to login_path

    else
      byebug
      User.new(userParams)
     
      
    end   
  end

  def show
    @characters = current_user.characters
    render json: CharacterSerializer.new(@characters)
  end

  private

  def userParams
    
    params.permit(:name, :password)
  end

end
