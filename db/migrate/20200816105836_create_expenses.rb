class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.integer :category_id, null: false
      t.string :name,         null: false
      t.integer :price,       null: false
      t.references :user,     null: false, foreign_key: true
      t.timestamps
    end
  end
end
