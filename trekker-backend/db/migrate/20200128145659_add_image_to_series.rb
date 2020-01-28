class AddImageToSeries < ActiveRecord::Migration[6.0]
  def change
    add_column :series, :image_URL, :string
  end
end
