Rails.application.routes.draw do
  resources :comments, only: [:create, :update, :destroy]
  resources :scores, only: [:create, :update, :destroy]
  resources :posts

  post 'posts/:id/update_url', to: 'posts#update_url'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
