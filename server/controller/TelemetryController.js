const Telemetry = require("../database/model/Telemetry");

module.exports = {
  async fetchTelemetry(req, res) {
    const telemetry = await Telemetry.find();
    return res.send(telemetry);
  },

  async insertTelemetry(data) {
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
    } = data;
    try {
      const telemetry = await Telemetry.create(data);
    } catch (err) {
      return res.status(400).send({ error: "Falha no cadastro de Telemetria" });
    }
  },
};
