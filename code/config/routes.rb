Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :competitions, only: :create do
    put :finish
    get :ranking
  end

  resources :results, only: [:create, :index]
end
