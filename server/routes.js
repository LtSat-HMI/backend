const express = require('express');
const TelemetryController = require('./controller/TelemetryController');
const RealTelemetryController = require('./controller/realTelemetryController');
const router = express.Router();

router.get("/telemetria", TelemetryController.fetchTelemetry);
router.get("/telemetria/real", RealTelemetryController.fetchRealTelemetry);
router.post("/telemetria", TelemetryController.insertTelemetry);
module.exports = router;