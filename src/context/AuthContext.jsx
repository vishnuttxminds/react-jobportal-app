import { createContext, useState } from "react";
import { users } from "../data/users";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password) => {
    const user = users.find(
      userDetails =>
        userDetails.email.toLowerCase() === email.toLowerCase() &&
        userDetails.password === password
    );

    if (user) {
      setCurrentUser(user);
      return { success: true };
    }

    return {
      success: false,
      message: "Invalid Email or Password"
    };
  };

  const logout = () => {
  setCurrentUser(null);
};

  return (
    <AuthContext.Provider value={{ currentUser, login, logout  }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
