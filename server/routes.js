const express = require('express');
const UserController = require('./controller/TelemetryController');
const router = express.Router();

router.get("/telemetria/get", UserController.fetchPost);
router.post("/telemetria", UserController.insertPosts);
module.exports = router;