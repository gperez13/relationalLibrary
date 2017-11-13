require 'sinatra/base'

require './controllers/ApplicationController'
require './controllers/BookController'
require './controllers/LocationController'
require './controllers/UserController'

require './models/BookModel'
require './models/LocationModel'
require './models/UserModel'




map('/') {run ApplicationController}
map('/books') {run BooksController}
map('/location') {run LocationController}
map('/user') {run UserController}