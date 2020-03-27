'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class LoginController {
    index({ view }) {
        return view.render('login')
    }

    async store({ request, response }) {
        const { email, password } = request.all()

        const user = await User.query().where('email', email).first()

        if(user) {
            const passwordVerify = await Hash.verify(password, user.password)

            if(passwordVerify) {
                return response.send(`Olá ${user.name}`)
            }
            else {
                return response.send('Erro ao entrar')
            }
        } else {
            return response.send('Erro ao entrar')
        }
    }
}

module.exports = LoginController
