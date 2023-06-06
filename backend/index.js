const express = require("express");
const cors =require("cors");
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/user.routes");
const projectsRoutes = require("./routes/project.routes");

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res)=>{
  res.send("Hello welcome");
})
app.use("/user", userRoutes)
app.use("/project", projectsRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, async() => {
  try{
    await dbConnect();
    console.log(`server started on port ${PORT}`);  
  }catch(err){
    if(err.message==="querySrv ECONNREFUSED _mongodb._tcp.cluster0.3pvw9hk.mongodb.net"){
      console.log("Network not connected");
    }else{
      console.log(err.message);
    }
  }
})