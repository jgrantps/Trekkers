class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :series
  attributes :name, :description, :image_URL, :series
end
