const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:test123@testcluster.oyvx5.gcp.mongodb.net/TestDB?retryWrites=true&w=majority";
const adminClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const user = (email, password) => {
  return {
    email: email,
    pwd: password,
  }
}

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const newUser = user(email, password);
  try {
    await adminClient.connect();
    const response = (await adminClient.db().collection('users').insertOne(newUser).then()).insertedId;
    console.log(response);
    res.send(`${JSON.stringify(response)}`,);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    await adminClient.connect();
    const response = await adminClient.db().collection('users').find( { email: email, pwd: password}).next();
    if (response !== null) {
      res.send(`${JSON.stringify(response._id)}`)
    }
    res.send(`${JSON.stringify(null)}`);
  } catch (e) {
    console.error(e);
  }
});

app.get('/getusers', async (req, res) => {
  const { email, password } = req.body;
  const uri = `mongodb+srv://${email}:${password}.oyvx5.gcp.mongodb.net/TestCluster?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  try {
    const response = await client.db().TestCOL().find();
    res.send(`${JSON.stringify(response)}`,);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
