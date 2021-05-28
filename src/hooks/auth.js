import { createContext, useCallback, useState, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@IFTM-PDS2:token");
    const emailUser = localStorage.getItem("@IFTM-PDS2:email");

    if (token && emailUser) {
      console.log("data: ", {token, emailUser})
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, emailUser };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
 
    const response = await api.post("auth/login", {
      email,
      password,
    });
    const token = response.data.token
    const emailAux  = response.data.email
    localStorage.setItem("@IFTM-PDS2:token", token);
    localStorage.setItem("@IFTM-PDS2:email", emailAux);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, emailUser: emailAux });
   
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@IFTM-PDS2:token");
    localStorage.removeItem("@IFTM-PDS2:email");

    setData({});
  }, []);

   

  return (
    <AuthContext.Provider
      value={{ emailUser: data.emailUser, signIn, signOut, setLoading, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };