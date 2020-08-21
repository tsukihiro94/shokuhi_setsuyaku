Rails.application.routes.draw do
  get 'posts/index'
  devise_for :users
  root "posts#index"
  resources :expenses, only:[:show,:create,:new,:destroy ] do
    collection do
      get 'search'
    end
  end
end
