import servicesProviders from "../models/servicesProviders";
import Users from "../models/Users";
import Services from "../models/Services";
import File from "../models/File";
import FileCover from "../models/FileCover";

class GetServicesMicrorregiaoController {
  async index(req, res) {
    const services = await servicesProviders.findAll({
      attributes: ["id", "description", "price", "time"],
      include: [
        {
          model: Users,
          as: "provider",
          where: {
            microrregiao: req.query.microrregiao,
            provider: true,
          },
          attributes: ["id", "name", "location_x", "location_y"],
          order: ["name"],
          include: [
            {
              model: File,
              as: "avatar",
              attributes: ["id", "path", "url"],
            },
            {
              model: FileCover,
              as: "cover",
              attributes: ["id", "path", "url"],
            },
          ],
        },
        {
          model: Services,
          as: "service",
          where: {
            description: req.query.description,
          },
          attributes: ["id", "description"],
        },
      ],
    });

    return res.json(services);
  }
}

export default new GetServicesMicrorregiaoController();
