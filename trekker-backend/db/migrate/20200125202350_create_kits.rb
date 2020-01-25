class CreateKits < ActiveRecord::Migration[6.0]
  def change
    create_table :kits do |t|
      t.string :name
      t.string :theme
      t.string :url

      t.timestamps
    end
  end
end
