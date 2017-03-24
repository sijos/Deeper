class RemoveConstraintFromState < ActiveRecord::Migration[5.0]
  def change
    change_column :resorts, :state_province, :string, null: true
  end
end
