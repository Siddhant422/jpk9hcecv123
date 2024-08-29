import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(false);


  const login = async (email, password) => {
    if(!email || !password){alert("please fill the details");return;}
    try {
        console.log('sdkfl')
      const response = await axios.post("http://localhost:4000/login", {
        username: email,
        password,
      });
      if (response?.data?.data != "invalid") {setUser(response.data.user);}
    
      else {
        throw new Error("invalid username or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading ,setUser}}>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
