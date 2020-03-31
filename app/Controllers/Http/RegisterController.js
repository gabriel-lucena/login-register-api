'use strict'

const User = use('App/Models/User')

class RegisterController {
    index({ view }) {
        return view.render('register')
    }

    async store({ request, response }) {
        const register = new User()

        register.name = request.input('name')
        register.email = request.input('email')
        register.password = request.input('password')
        register.date= request.input('date')
        register.city= request.input('city')

        await register.save()
        
        return response.send('Conta criada!')
    }
}

module.exports = RegisterController
