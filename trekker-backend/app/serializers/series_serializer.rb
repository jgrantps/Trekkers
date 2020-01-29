class SeriesSerializer
  include FastJsonapi::ObjectSerializer
  has_many :characters
  attributes :title, :image_URL, :characters
end
