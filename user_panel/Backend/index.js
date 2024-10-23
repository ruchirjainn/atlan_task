require('dotenv').config()

const connectwithDB = require('./config/db');
const app = require('./app');
const cors = require('cors');



// const corsOptions ={
//     origin:'http://localhost:5000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//     Access-Control-Allow-Credentials: true
// }

const MONGODB_URI = "mongodb+srv://ruchirjain127:mOSC2mQHnyoDNiRG@cluster0.7i9nx.mongodb.net/myDatabase?retryWrites=true&w=majority";
const PORT = 3000;

app.use(cors());

//connect MongoDB
connectwithDB();


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});

