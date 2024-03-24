const { MongoClient, ObjectID } = require('mongodb');

const uri = 'mongodb+srv://Mohiddeen:Mohiddeen123@m3a2.lvkxqch.mongodb.net/database1?retryWrites=true&w=majority';

async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('database1'); // Use the name of the database you created
    const collection = database.collection('collection1'); // Use the name of the collection you created

    // const insertResult = await collection.insertOne({ name: 'John', age: 30 });

    // if (insertResult && insertResult.ops && insertResult.ops.length > 0) {
    //   console.log('Inserted document:', insertResult.ops[0]);
    // } else {
    //   console.error('Insert operation failed. No document inserted.');
    // }
    // // Read operation
    // const findResult = await collection.findOne({ _id: insertResult.ops[0]._id });
    // console.log('Found document:', findResult);

    // Update operation
    // const updateResult = await collection.updateOne(
    //   { _id: insertResult.ops[2]._id },
    //   { $set: { age: 31 } }
    // );
    // console.log('Modified count:', updateResult.modifiedCount);

    // Read all documents
    // const allDocuments = await collection.find({}).toArray();
    // console.log('All documents:', allDocuments);

    // Delete operation
    const deleteResult = await collection.deleteOne({ _id: insertResult.ops[0]._id });
    console.log('Deleted count:', deleteResult.deletedCount);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
