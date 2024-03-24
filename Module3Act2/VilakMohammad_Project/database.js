
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Mohiddeen:Mohiddeen123@m3a2.lvkxqch.mongodb.net/database1?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {

    await client.connect();

    console.log('Connected to MongoDB Atlas');

  } finally {
 
    await client.close();
  }
}

connectToMongoDB();
