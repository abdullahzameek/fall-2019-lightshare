const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const articleRouter = require('./routes/article');
const authorRouter = require('./routes/author');
const categoryRouter = require('./routes/category');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true})
.catch(error => console.log("THE ERROR IS " +error));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.use('/article', articleRouter);
app.use('/author', authorRouter);
app.use('/category', categoryRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});