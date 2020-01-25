class CharactersController < ApplicationController
  has_many :selections
  has_many :users, through: :selections
  has_many :gifts
  has_many :kits, through: :gifts


end
