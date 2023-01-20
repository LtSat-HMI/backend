const express = require('express');
const TelemetryController = require('./controller/TelemetryController');
const router = express.Router();

router.get("/telemetria", TelemetryController.fetchTelemetry);
router.post("/telemetria", TelemetryController.insertTelemetry);
module.exports = router;