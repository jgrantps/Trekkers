class User < ApplicationRecord
  has_secure_password 
  
  has_many :selections
  has_many :characters, through: :selections

  validates :name, :presence => true
  validates :name, :uniqueness => true

end
