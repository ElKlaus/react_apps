import React from "react";
import './styles/App.css';
import {BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom"
import About from "./pages/About";
import Posts from "./pages/Post";
import { Navbar } from "./components/UI/Navbar/Navbar";
import { Error } from "./pages/Error";
import { AppRouter } from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
