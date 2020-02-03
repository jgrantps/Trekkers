class User < ApplicationRecord

  has_many :selections
  has_many :characters, through: :selections
  has_many :series, through: :characters

  validates :name, :presence => true
  validates :name, :uniqueness => true

  validates :password, :presence => true
  

  def series_unique
    self.series.uniq
  end

  def build_selections_params
    self.selections.map do |selection|
    {"id" => selection.id, "user_id" => self.id, "character_id" => selection.character.id, "character" => {"id" => selection.character.id, "name" => selection.character.name, "description" => selection.character.description, "image_URL" => selection.character.image_URL}}
     
    
  end
  end

end
