class UserSerializer
  include FastJsonapi::ObjectSerializer
  has_many :selections
  has_many :characters, through: :selections
  has_many :series, through: :characters
  
  attributes :name

  attribute :selections do |object|
    object.build_selections_params
  end

  attribute :series do |object|
    Series.all
  end


end


# {:user =>{:id => 1, :name => "annie", :selections=>{:id=> 1, :user_id => 1, :character_id => 3, :character => {:id => 3, :name => "captain Jean Luc Picard", :description => "captain", :series_id => 3}, {:id => 2, }}}