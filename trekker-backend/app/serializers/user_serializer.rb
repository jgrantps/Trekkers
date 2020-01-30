class UserSerializer
  include FastJsonapi::ObjectSerializer
  has_many :characters
  attributes :name, :characters

  # attribute :is_logged_in do |user, params|
  #   params[:user].logged_in ? true : false
  # end

end
