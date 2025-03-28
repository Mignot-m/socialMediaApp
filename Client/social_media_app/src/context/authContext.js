import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
    );
    const login = () => {
        // TODOS
        setCurrentUser({
            id: 1,
            name:"john Doe",
        })
    }
};
