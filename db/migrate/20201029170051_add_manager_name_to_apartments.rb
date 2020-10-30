class AddManagerNameToApartments < ActiveRecord::Migration[6.0]
  def change
    add_column :apartments, :manager, :string
  end
end
