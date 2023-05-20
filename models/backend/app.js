const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4001;
const db = require('./firebaseConfig');
const { getFirestore, collection, doc, setDoc,getDoc,deleteDoc, addDoc } = require('firebase/firestore/lite');


app.use(cors());
app.use(express.json());

app.route('/user:userId')
    .get(async (req, res) => {

        const userId = req.params.userId;// Replace with the ID of the specific document you want to write to
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
    })
    .post( async (req, res) => {
        const data = req.body;
        const userId = req.params.userId; // Replace with the ID of the specific document you want to write to
        const userDocRef = doc(db, 'Users', userId);
        await setDoc(userDocRef, data);
        console.log("Data of the request: ", data);
        res.send({ message: 'We received your data!!!' });

    })
    .delete(async (req, res) => { 
        const userId = req.params.userId;// Replace with the ID of the specific document you want to write to
        const userDocRef = doc(db, 'Users', userId);
        await deleteDoc(userDocRef);
        res.send({ message: 'We deleted your data!!!' });
    })
    .put(async (req, res) => {
        const data = req.body;
        const userId = req.params.userId; // Replace with the ID of the specific document you want to write to
        const userDocRef = doc(db, 'Users', userId);
        await setDoc(userDocRef, data);
        console.log("Data of the request: ", data);
        res.send({ message: 'We updated your data!!!' });
    })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }
)
