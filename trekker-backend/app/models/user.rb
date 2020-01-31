class User < ApplicationRecord

  has_many :selections
  has_many :characters, through: :selections

  validates :name, :presence => true
  validates :name, :uniqueness => true

  validates :password, :presence => true
  

 
end
