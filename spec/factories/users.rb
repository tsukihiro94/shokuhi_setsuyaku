FactoryBot.define do
  factory :user do
    nickname              {Faker::Name.initials(number: 2)}
    email                 {Faker::Internet.free_email}
    password              {"ht0000"}
    password_confirmation {password}
    target_amount         {30000}
  end
end