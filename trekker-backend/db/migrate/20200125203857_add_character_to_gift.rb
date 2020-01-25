class AddCharacterToGift < ActiveRecord::Migration[6.0]
  def change
    add_reference :gifts, :Character, index: true
  end
end
