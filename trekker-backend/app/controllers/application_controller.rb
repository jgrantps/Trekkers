class ApplicationController < ActionController::API
  
  
  
  def currentUser
    @current_user ||= User.find(userParams)
  end
  
  private

  
  def userParams
    input = params.require(:USER).permit(data: [:id])
    output = input[:data][:id].to_i
    output
  end

end
