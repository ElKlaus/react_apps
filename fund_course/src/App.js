import React, {useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context/context";
import './styles/App.css';

function App() {
  const [isAuth, setIsAuth] = useState(true); //Не работает с false. Разобрать повторно создание авторизации
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
