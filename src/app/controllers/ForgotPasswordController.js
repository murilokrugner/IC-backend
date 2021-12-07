import Users from '../models/Users'

import Mail from '../lib/Mail';

class ForgotPasswordController {
  async store(req, res) {
    const {email} = req.body;

    const user = await Users.findOne({
        where: {
            email: email,
        }
    });

    if (!user) {
        return res.status(400).send('E-mail inválido');
    }

    var password_hash = (Math.random() * 99999999999).toFixed(0);

    await Mail.sendMail({
        to: `${email} <${email}>`,
        subject: 'Solicitação de nova senha Jogo',
        text: `Sua nova senha: ${password_hash}` ,
    });

    await user.update({
        password: password_hash,
    });

    return res.json(user);
}
}

export default new ForgotPasswordController;