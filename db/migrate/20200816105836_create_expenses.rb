class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.date       :day,           null: false
      t.integer    :category_id_1
      t.string     :name_1
      t.integer    :price_1
      t.integer    :category_id_2
      t.string     :name_2
      t.integer    :price_2
      t.integer    :category_id_3
      t.string     :name_3
      t.integer    :price_3
      t.integer    :category_id_4
      t.string     :name_4
      t.integer    :price_4
      t.integer    :category_id_5
      t.string     :name_5
      t.integer    :price_5
      t.integer    :category_id_6
      t.string     :name_6
      t.integer    :price_6
      t.integer    :category_id_7
      t.string     :name_7
      t.integer    :price_7
      t.integer    :category_id_8
      t.string     :name_8
      t.integer    :price_8
      t.integer    :category_id_9
      t.string     :name_9
      t.integer    :price_9
      t.integer    :category_id_10
      t.string     :name_10
      t.integer    :price_10
      t.references :user,      foreign_key: true
      t.timestamps
    end
  end
end