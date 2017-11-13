class User < ActiveRecord::Base


	has_many :book

	has_secure_password

end