import { createContext, useState } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('shamim')
    const AuthValue = { user }
    return (
        <AuthContext.Provider value={AuthValue} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;