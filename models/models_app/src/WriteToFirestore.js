
import firebase from "./firebaseConfig";
import { useState } from "react";
import 'firebase/firestore';


function WriteToFirestore(collectonName,docName,data) {
  const db = firebase.firestore();

    // const [value, setValue] = useState("");
    
    // const getValue = (event) => {
    //   setValue(event.target.value);
    // };
  
    const addValue = async () => {
      try {
        db.collection(collectonName).doc(docName).set(
          data
          // name: 'John Doe',
          // email: 'johndoe@example.com',
        );
        console.log("Value successfully written!");
      } catch (error) {
        console.error("Error writing Value: ", error);
      }
    };
  
    addValue();

    // return (
    //   <div>
    //     <input onBlur={getValue} type='text' />
    //     <button type='button' onClick={addValue}>
    //       Add
    //     </button>
    //   </div>
    // );
  };
  
  export default WriteToFirestore;