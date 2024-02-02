const express = require("express");
const userRouter = require("./user");
const accountRoutes = require('./account')

const router = express.Router();

router.use('/user', userRouter);
router.use('/account',accountRoutes);

module.exports = router;