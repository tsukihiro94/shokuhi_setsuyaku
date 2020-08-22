# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_21_150456) do

  create_table "expenses", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.date "day", null: false
    t.integer "category_id_1"
    t.string "name_1"
    t.integer "price_1"
    t.integer "category_id_2"
    t.string "name_2"
    t.integer "price_2"
    t.integer "category_id_3"
    t.string "name_3"
    t.integer "price_3"
    t.integer "category_id_4"
    t.string "name_4"
    t.integer "price_4"
    t.integer "category_id_5"
    t.string "name_5"
    t.integer "price_5"
    t.integer "category_id_6"
    t.string "name_6"
    t.integer "price_6"
    t.integer "category_id_7"
    t.string "name_7"
    t.integer "price_7"
    t.integer "category_id_8"
    t.string "name_8"
    t.integer "price_8"
    t.integer "category_id_9"
    t.string "name_9"
    t.integer "price_9"
    t.integer "category_id_10"
    t.string "name_10"
    t.integer "price_10"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_expenses_on_user_id"
  end

  create_table "posts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.text "text", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "nickname"
    t.integer "target_amount"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "expenses", "users"
  add_foreign_key "posts", "users"
end
