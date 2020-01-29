Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  post "/logout", to: "sessions#destroy"

  get 'sessions/destroy'
  resources :series
  resources :kits
  resources :gifts
  resources :characters
  resources :selections
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
