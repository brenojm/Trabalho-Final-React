import { createContext, useState, useEffect } from "react";

export const estadoContexto = {
  token: ""
};

export const DataContext = createContext(null);

export const Context = (props) => {
  const [token, setToken] = useState("");

  const handleSetToken = (valor) => {
    setToken(valor);
  };

  const handleRemoveToken = () => {
    if(localStorage.getItem('token')){
        localStorage.removeItem('token');
    }
    
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <DataContext.Provider value={{ token, handleSetToken, handleRemoveToken }}>{props.children}</DataContext.Provider>
  );
};