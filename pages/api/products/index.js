import connectDB from "../_db/connect-db";
import { Product } from "../_db/models/Product";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try{
      const products = await Product.find({});
      return res.status(200).json(products);
    } catch(error){
      return res.status(500).json({error: error.message});
    }
    break;

    default:
      return res.status(400).json({ error: "method not supported" });
  }
}

export default connectDB(handler);