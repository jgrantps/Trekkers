class AddCharacterToSelection < ActiveRecord::Migration[6.0]
  def change
    add_reference :selections, :character, index: true
  end
end
