class AddUserToSelection < ActiveRecord::Migration[6.0]
  def change
    add_reference :selections, :user, null: false, foreign_key: true
  end
end
