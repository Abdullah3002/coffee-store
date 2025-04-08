import { createContext, StrictMode, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser
    };

    return (
       <StrictMode>
            <AuthContext.Provider value={userInfo}>
            {children}
            </AuthContext.Provider>
       </StrictMode>
    );
};

export default AuthProvider;
