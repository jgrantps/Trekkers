class Character < ApplicationRecord
  has_many :selections
  has_many :users, through: :selections
  has_many :gifts
  has_many :kits, through: :gifts
  belongs_to :series
end
