Bucketlist::Application.routes.draw do
  resources :comments, :only => [:create]
  resources :todo_items, :only => [:index, :show, :create]


  # root :to => 'welcome#index'

  
end
