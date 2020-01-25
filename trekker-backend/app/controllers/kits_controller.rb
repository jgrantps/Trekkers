class KitsController < ApplicationController
  has_many :gifts
  has_many :characters, through: :gifts
end
