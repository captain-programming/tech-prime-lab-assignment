require("dotenv").config();

const { default: mongoose } = require("mongoose")

const dbConnect = () =>{
  console.log('Database conected!!!')
  return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports=dbConnect;