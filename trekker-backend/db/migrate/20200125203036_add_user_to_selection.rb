class AddUserToSelection < ActiveRecord::Migration[6.0]
  def change
    add_reference :selections, :user, index: true
  end
end
