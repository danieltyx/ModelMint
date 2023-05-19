const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4001;
const db = require('./firebaseConfig');
app.use(cors());
app.use(express.json());


app.post('/create', async (req, res) => {
    
    const data = req.body;
    // const Users = db.collection('Users');
    // await Users.add(data);
    console.log("Data of the request: ", data);
    res.send({ message: 'We received your data!!!' });

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }
)
