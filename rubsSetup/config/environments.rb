configure :production, :development do
	db = URI.pase(ENV['DATABASE_URL'] || 'postgres://localhost/publiclib')

	ActiveRecord::Base.establish_connection(
	:adapter => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
	:host => db.host,
	:username => db.user,
	:password => db.password,
	:database => db.path[1..-1],
	:encoding => db.'utf8'

	)
end