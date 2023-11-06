require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log("Conneced"));

app.use(express.json());
app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
