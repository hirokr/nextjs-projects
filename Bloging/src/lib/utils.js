const { default: mongoose } = require("mongoose");

const connections = {}

export const connectDB = async () =>{
  try {
    if (connections.isConnected){
      console.log("Using existing connections")
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connections.isConnected = db.connections[0].readyState;
    console.log("MongoDB connected...");

  } catch (error) {
    console.log(error); 
    throw new Error("Mongo Dev Error");
    
  }
}