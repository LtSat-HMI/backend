const database = require('../database');

const databaseTelemetry = database.connection.useDb('telemetry');
const TelemetryRealSchema = new database.Schema({
  count: Number,
  Temperatura: Number,
  Altitude: Number,
  Tensao: Number,
  GpsLatitude: Number,
  GpsLongitude: Number,
  GpsAltura: Number,
  GiroscopioR: Number,
  GiroscopioP: Number,
  GiroscopioY: Number,
  AcelerometroR: Number,
  AcelerometroP: Number,
  AcelerometroY: Number,
  MagnetometroP: Number,
  MagnetometroR: Number,
  MagnetometroY: Number,
  Outro: Number,
});

TelemetryRealSchema.set('toJSON', {
  getters: true,
});

TelemetryRealSchema.set('toObject', {
  getters: true,
});

const RealTelemetry = databaseTelemetry.model(
  'real_telemetry',
  TelemetryRealSchema,
);

module.exports = RealTelemetry;