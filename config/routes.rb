Rails.application.routes.draw do
  resources :posts
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  root 'posts#index'
  resources :expenses, only: %i[show create new destroy] do
    collection do
      get 'search'
    end
    collection do
      get 'search_month'
    end
  end
end
