const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4003;
const { trainModel } = require('./train_model');
const db = require('./firebaseConfig');
const { getFirestore, collection, doc, setDoc,getDoc,deleteDoc, addDoc } = require('firebase/firestore/lite');
const fs = require('fs');
const { lookupStatus } = require('./lookupStatus');
var csvFilePath = "test.csv";
app.use(cors());
app.use(express.json());

app.post('/lookup:modelid', async (req, res) => {
    const model_id = req.params.modelid;
    a = lookupStatus(model_id);
    a.then((response) => {
        console.log("response: ", response);
        res.send({
            response: response
        });
    });
    console.log("a: ", a);
});

app.post('/upload', upload.single("file"), (req, res) => {
    const file = req.file;
    if (!file) {
        res.status(400).send({ message: 'No file uploaded' });
        return;
      }
    console.log(file);
        const newPath = `${__dirname}/uploads/testtest2.csv`;
        csvFilePath = newPath;
        fs.rename( file.path, newPath, (err) => {
            if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error saving file' });
            } else {
            console.log("csvFilePath: ", csvFilePath);
            trainModel(csvFilePath).then((model_id) => {
                console.log("model_id: ", model_id);
                res.send({ message: 'File uploaded successfully!', model_id: model_id });
            });
            }
        });

  });
  

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
