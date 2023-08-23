const mongoose = require('mongoose');
// import .env
require('dotenv').config();

// connect to MONGO_URL from .env
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});