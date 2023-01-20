const database = require('../database');

const databaseTelemetry = database.connection.useDb('telemetry');
const TelemetrySchema = new database.Schema({
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
}, {
    timestamps: true
  }
);

TelemetrySchema.set('toJSON', {
  getters: true,
});

TelemetrySchema.set('toObject', {
  getters: true,
});

const Telemetry = databaseTelemetry.model(
  'statistical_telemetry',
  TelemetrySchema,
);

module.exports = Telemetry;