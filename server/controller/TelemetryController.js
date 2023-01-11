const Post = require("../database/model/Telemetry");

module.exports = {
  async fetchPost(req, res) {
    const data = { count: req.body.count };
    const posts = await Post.find(data);
    return res.send(posts);
  },

  async insertPosts(req, res) {
    const {
      count,
      Temperatura,
      Altitude,
      Tensao,
      GpsLatitude,
      GpsLongitude,
      GpsAltura,
      GiroscopioR,
      GiroscopioP,
      GiroscopioY,
      AcelerometroR,
      AcelerometroP,
      AcelerometroY,
      MagnetometroP,
      MagnetometroR,
      MagnetometroY,
    } = req.body;
    try {
      if (await Post.findOne({ count })) {
        return res.status(409).send({ error: "Pacote já existe" });
      }

      const posts = await Post.create(req.body);
      return res.send({ posts });
    } catch (err) {
      return res.status(400).send({ error: "Falha no cadastro de Telemetria" });
    }
  },
};
