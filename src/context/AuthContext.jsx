import { createContext, useState } from "react";
import { users } from "../data/users";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password) => {
    console.log("Login Attempt:", email, password);
    console.log("Users:", users);

    const user = users.find(
      u =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (user) {
      console.log("Login Success:", user);
      setCurrentUser(user);
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
