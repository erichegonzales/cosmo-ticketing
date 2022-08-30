Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'events#index'
  #GET
  get 'events/:id', to: 'events#show'
  #POST

  #PATCH

  #DELETE
end
