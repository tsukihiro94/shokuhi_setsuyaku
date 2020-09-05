FactoryBot.define do
  factory :post do
    text        {"こんにちは"}
    association :user
  end
end
