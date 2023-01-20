const Telemetry = require("../database/model/Telemetry");

module.exports = {
  async fetchTelemetry(req, res) {
    const data = { count: req.body.count };
    const telemetry = await Telemetry.find(data);
    return res.send(telemetry);
  },

  async insertTelemetry(req, res) {
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
      if (await Telemetry.findOne({ count })) {
        return res.status(409).send({ error: "Pacote já existe" });
      }

      const telemetry = await Telemetry.create(req.body);
      return res.send({ telemetry });
    } catch (err) {
      return res.status(400).send({ error: "Falha no cadastro de Telemetria" });
    }
  },
};
