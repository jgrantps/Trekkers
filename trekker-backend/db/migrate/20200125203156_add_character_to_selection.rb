class AddCharacterToSelection < ActiveRecord::Migration[6.0]
  def change
    add_reference :selections, :character, null: false, foreign_key: true
  end
end
