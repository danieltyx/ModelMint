const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4001;
const db = require('./firebaseConfig');
const { getFirestore, collection, doc, setDoc,getDoc, addDoc } = require('firebase/firestore/lite');
app.use(cors());
app.use(express.json());


app.post('/create', async (req, res) => {
    
    const data = req.body;
    const userId = 's0x425d06f5218f19b51fb3415fbaaa00cccab61cef'; // Replace with the ID of the specific document you want to write to
    const userDocRef = doc(db, 'Users', userId);
    await setDoc(userDocRef, data);
    console.log("Data of the request: ", data);
    res.send({ message: 'We received your data!!!' });

});


app.get('/read', async (req, res) => {
    const userId = 's0x425d06f5218f19b51fb3415fbaaa00cccab61cef'; // Replace with the ID of the specific document you want to write to
    const userDocRef = doc(db, 'Users', userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        res.send(docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        res.send({ message: 'No such document!' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }
)
