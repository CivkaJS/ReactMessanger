import { getDatabase, ref, set, push } from "firebase/database";
import firebase from "../service/firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SetFireBase = (addres, data, action) => {

    const [updateSet, setUpdateSet] = useState(false);
    const dispatch = useDispatch();

    const db = getDatabase(firebase);
    const messageRef = ref(db, addres);
    const newMessageRef = push(messageRef);

    set(newMessageRef, data)

     updateSet ? setUpdateSet(false) : setUpdateSet(true);
     dispatch({ type: action, payload: updateSet });
    // await set(newMessageRef, data)
    //     .then(() => {
    //         // updateSet ? setUpdateSet(false) : setUpdateSet(true);
    //         // dispatch({ type: action, payload: updateSet });
    //     });
}

export default SetFireBase;