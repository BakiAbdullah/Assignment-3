import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";

let server: Server;
const PORT = "https://assignment-3-xi-kohl.vercel.app"

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://bakiabdullah:bQQV1JxFXSNVtbHn@cluster0.uqgxsrk.mongodb.net/library-management?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB with mongoose!");
    server = app.listen(PORT, () => {
      console.log(`Library app is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
