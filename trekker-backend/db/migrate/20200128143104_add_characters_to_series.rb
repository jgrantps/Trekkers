class AddCharactersToSeries < ActiveRecord::Migration[6.0]
  def change
    add_reference :characters, :series, index: true

  end
end
