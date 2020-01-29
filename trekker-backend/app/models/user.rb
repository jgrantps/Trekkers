class User < ApplicationRecord
  has_secure_password 
  
  has_many :selections
  has_many :characters, through: :selections
end
