Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
  end
end
