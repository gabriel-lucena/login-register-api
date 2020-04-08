'use strict'

const User = use('App/Models/User')

class RegisterController {
	async store({ request }) {
		const {name, email, password, date, city} = request.all()
		
		const register = new User()

		register.name = name
		register.email = email
		register.password = password
		register.date = date
		register.city = city

		await register.save()

		return register

	}
}

module.exports = RegisterController
