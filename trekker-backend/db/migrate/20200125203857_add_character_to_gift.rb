class AddCharacterToGift < ActiveRecord::Migration[6.0]
  def change
    add_reference :gifts, :Character, null: false, foreign_key: true
  end
end
