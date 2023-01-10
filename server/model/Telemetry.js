let mongoose = require('mongoose');

const TelemetrySchema = new mongoose.Schema({
  count: {
    $type:Number, 
    required: true,
    unique: true,
  },
  Temperatura: {
    $type:Number, 
    required: false,
  },
  Altitude: {
    $type:Number, 
    required: false,
  },
  Tensao: {
    $type:Number, 
    required: false,
  },
  GpsLatitude: {
    $type:Number, 
    required: false,
  },
  GpsLongitude: {
    $type:Number, 
    required: false,
  },
  GpsAltura: {
    $type:Number, 
    required: false,
  },
  GiroscopioR: {
    $type:Number, 
    required: false,
  },
  GiroscopioP: {
    $type:Number, 
    required: false,
  },
  GiroscopioY: {
    $type:Number, 
    required: false,
  },
  AcelerometroR: {
    $type:Number, 
    required: false,
  },
  AcelerometroP: {
    $type:Number, 
    required: false,
  },
  AcelerometroY: {
    $type:Number, 
    required: false,
  },
  MagnetometroP: {
    $type:Number, 
    required: false,
  },
  MagnetometroR: {
    $type:Number, 
    required: false,
  },
  MagnetometroY: {
    $type:Number, 
    required: false,
  }
}, {
    typeKey: '$type',
    timestamps: true
  }
);

module.exports = mongoose.model('posts', TelemetrySchema);