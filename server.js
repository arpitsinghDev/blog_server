const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postsRoute = require('./routes/posts');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/posts', postsRoute);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => {
  console.error('Connection error', err);
});
