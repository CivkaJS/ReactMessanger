import React, { useState } from 'react'
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import firebase from '../service/firebase'


let AuthContext = React.createContext(null)

export function AuthProvider({ children }) {
    let [user, setUser] = useState();

    let signin = async (newUser, callback) => {
        const auth = getAuth(firebase);
        await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        callback();
    };

    const signout = (returnFuction) => {
        const auth = getAuth(firebase);
        signOut(auth).then(() => {
            setUser(auth.user)
            returnFuction(); 
          }).catch((error) => {
            console.log(error.message)
          });                        
        }

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    return React.useContext(AuthContext);
}

export default useAuth;