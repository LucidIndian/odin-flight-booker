Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root to: 'flights#index'
  resources :airports, only: :index
  
  resources :flights, only: :index
  resources :bookings
end
