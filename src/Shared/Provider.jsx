import { createContext, useEffect, useState } from "react"
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const contextData = createContext();

const Provider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      if(loggedUser) {
        setUser(loggedUser);
        setLoading(false);
      }else {
        setLoading(false);
        setUser(null);
      }
    })

    return () => unsubscribe();
  }, [])


  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const signUp = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithPop = (provider) => {
    setLoading(false);
    return signInWithPopup(auth, provider);
  }

  const logOut = () => {
    return signOut(auth);
  }

  const data = {
    auth,
    user,
    setUser,
    signUp,
    googleProvider,
    gitProvider,
    signInWithPop,
    logOut,
    signIn,
    loading,
    darkmode,
    setDarkmode
  }

  return (
    <contextData.Provider value={data}>
      {children}
    </contextData.Provider>
  )
}

export default Provider