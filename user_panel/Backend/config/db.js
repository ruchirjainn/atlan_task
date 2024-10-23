const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://ruchirjain127:mOSC2mQHnyoDNiRG@cluster0.7i9nx.mongodb.net/myDatabase?retryWrites=true&w=majority";
const PORT = 3000;

const connectWithDB = () => {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('DB connected');
    })
    .catch((error) => {
      console.log('DB Error');
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDB;
