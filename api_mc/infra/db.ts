import mongoose from 'mongoose'

class Database {

  private DB_URL = "mongodb+srv://Paim:Gabyluiz28*@cluster0.npcwa.mongodb.net/db_portal?retryWrites=true&w=majority"

  createConnection() {
    mongoose.connect(this.DB_URL)
  }
}

export default Database