class User < ApplicationRecord
  has_many :selections
  has_many :characters, through: :selections
end
