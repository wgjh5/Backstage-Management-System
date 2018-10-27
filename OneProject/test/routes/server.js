const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'shopList';
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  // Get the documents collection
 
  // Insert some documents
  db.collection('list').insertMany([
    {"a" : 1}, {"a" : 2}, {"a" : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    // callback(result);
  });

  client.close();
}); 