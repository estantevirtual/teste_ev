Rails.application.routes.draw do
  resources :competes, :defaults => { :format => :json }, :only => [:create, :index, :show]
  resources :sportsmen, :defaults => { :format => :json }, :except => [:new, :edit]
  resources :events, :defaults => { :format => :json }, :except => [:new, :edit] do
    member do
      post :end
      get :ranking
    end
  end
  resources :categories, :defaults => { :format => :json }, :except => [:new, :edit]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
