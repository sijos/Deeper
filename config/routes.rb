Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :resorts, only: [:index, :show]
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :reviews, only: [:index, :create, :update, :destroy]
    resources :photos, only: [:index, :create, :destroy]
  end

  root "static_pages#root"
end
