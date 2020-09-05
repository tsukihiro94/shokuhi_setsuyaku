FactoryBot.define do
  factory :expense do
    day            {"20200801"}
    category_id_1  {"2"}
    name_1         {"焼き鳥"}
    price_1        {300}
    category_id_2  {"2"}
    name_2         {"焼き鳥"}
    price_2        {300}
    category_id_3  {"2"}
    name_3         {"焼き鳥"}
    price_3        {300}
    category_id_4  {"2"}
    name_4         {"焼き鳥"}
    price_4        {300}
    category_id_5  {"2"}
    name_5         {"焼き鳥"}
    price_5        {300}
    category_id_6  {"2"}
    name_6         {"焼き鳥"}
    price_6        {300}
    category_id_7  {"2"}
    name_7         {"焼き鳥"}
    price_7        {300}
    category_id_8  {"2"}
    name_8         {"焼き鳥"}
    price_8        {300}
    category_id_9  {"2"}
    name_9         {"焼き鳥"}
    price_9        {300}
    category_id_10  {"2"}
    name_10         {"焼き鳥"}
    price_10        {300}
    association :user
  end
end
