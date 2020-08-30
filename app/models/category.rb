class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '--' },
    { id: 2, name: '朝食' },
    { id: 3, name: '昼食' },
    { id: 4, name: '夕食' },
    { id: 5, name: '食材' },
    { id: 6, name: '飲み物' },
    { id: 7, name: 'おやつ' },
    { id: 8, name: '交際費' },
    { id: 9, name: 'その他' }
  ]
end
