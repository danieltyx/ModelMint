
import React,{useState} from "react";
import { getFirestore } from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { collection, doc, setDoc } from 'firebase/firestore';

import db from "./firebaseConfig.js";


function WriteToFirestore() {
    const [value, setValue] = useState("");
    
    const getValue = (event) => {
      setValue(event.target.value);
    };
  
    const addValue = async () => {
      try {
        const docRef = doc(db, "values", value);
        await setDoc(docRef, {
          value: value,
        });
        console.log("Value successfully written!");
      } catch (error) {
        console.error("Error writing Value: ", error);
      }
    };
  
    return (
      <div>
        <input onBlur={getValue} type='text' />
        <button type='button' onClick={addValue}>
          Add
        </button>
      </div>
    );
  };
  
  export default WriteToFirestore;