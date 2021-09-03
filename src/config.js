// config.js
const dotenv = require("dotenv");

dotenv.config();
// Export env variables
module.exports = {
    API_HOST: process.env.API_HOST
};
