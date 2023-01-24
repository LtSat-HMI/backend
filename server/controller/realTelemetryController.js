const RealTelemetry = require("../database/model/RealTelemetry");

module.exports = {
  async insertRealTelemetry(data) {
    const {
      count,
      Temperatura,
      Altitude,
      Tensao,
      GpsLatitude,
      GpsLongitude,
      GpsAltura,
      GiroscopioP,
      GiroscopioR,
      GiroscopioY,
      AcelerometroP,
      AcelerometroR,
      AcelerometroY,
      MagnetometroP,
      MagnetometroR,
      MagnetometroY,
      Outro,
    } = data;
    const telemetry = await RealTelemetry.create(data);
  },

  async fetchRealTelemetry(req, res) {
    const telemetry = await RealTelemetry.find();
    return res.send(telemetry);
  },
};
