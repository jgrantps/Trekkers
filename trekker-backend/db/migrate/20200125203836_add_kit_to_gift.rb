class AddKitToGift < ActiveRecord::Migration[6.0]
  def change
    add_reference :gifts, :kit, index: true
  end
end
