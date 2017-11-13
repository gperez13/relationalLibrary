class ApplicationController < Sinatra::Base


	require 'bundler'
	Bundler. require


	register Sinatra::CrossOrigin

	ActiveRecord::Base.establish_connection(
		:adapter => 'postgresql',
		:database => 'item'
		)

	configure do 
		enable :cross_origin
	end


	set :allow_origin, :any
	set :allow_methods, [:get, :post, :options]

	set :viewa, File.expand_path('../../views', __FILE__)



	not_found do 
		'There has been an error.'
	end





end