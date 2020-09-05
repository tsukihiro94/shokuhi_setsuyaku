FactoryBot.define do
  factory :user do
    nickname              {"ぺこピグ"}
    email                 {"abc@abc"}
    password              {"ht0000"}
    password_confirmation {password}
    target_amount         {30000}
  end
end