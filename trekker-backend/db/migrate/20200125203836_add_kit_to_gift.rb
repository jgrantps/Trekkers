class AddKitToGift < ActiveRecord::Migration[6.0]
  def change
    add_reference :gifts, :kit, null: false, foreign_key: true
  end
end
