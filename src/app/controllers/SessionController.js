import jwt from "jsonwebtoken";
import * as Yup from "yup";

import authConfig from "../../config/auth";
import Users from "../models/Users";
import File from "../models/File";
import FileCover from "../models/FileCover";

class SessionController {
  async store(req, res) {
    // validações
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { email, password } = req.body;

    // verificando email se está correto
    const user = await Users.findOne({
      where: { email },
      include: [
        {
          model: File,
          as: "avatar",
          attributes: ["id", "path", "url"],
        },
      ],
    });

    const userCover = await Users.findOne({
      where: { email },
      include: [
        {
          model: FileCover,
          as: "cover",
          attributes: ["id", "path", "url"],
        },
      ],
    });

    if (!user || !userCover) {
      return res.status(401).json({ error: "User not found" });
    }

    // verificando senha
    if (!(await user.checkPassword(password))) {
      return res.json(401).json({ error: "Password does not match" });
    }

    const {
      id,
      name,
      phone,
      avatar,
      provider,
      city,
      type_document,
      first_access,
      blocked,
    } = user;

    const { cover } = userCover;

    return res.json({
      user: {
        id,
        name,
        email,
        phone,
        provider,
        avatar,
        cover,
        city,
        type_document,
        first_access,
        blocked,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
