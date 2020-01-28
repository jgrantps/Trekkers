class AddImageToCharacter < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :image_URL, :string
  end
end
