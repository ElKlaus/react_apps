import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './home.js';
import LoginForm from './login.js';
import ProfilePage from './profile.js';
import NewsPage from './news.js';
import { RequireAuth } from './hoc/RequireAuth.js';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    localStorage.setItem('isLogged', false);
  };

  render() {
    return (
      <>
        <Router>
          <header className='header'>
              <div className='container header__container'>
                <nav className='nav'>
                  <ul className='nav__menu'>
                    <li className='nav__item'><Link className='nav__link' to="/">На главную</Link></li>
                    <li className='nav__item'><Link className='nav__link' to="/news">Новости</Link></li>
                    <li className='nav__item'><Link className='nav__link' to="/login">Профиль</Link></li>
                  </ul>
                </nav>
              </div>
          </header>
          <div className="content">
            <div className="container content__container">
              <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/news' element={<NewsPage />}></Route> 
                <Route path='/login' element={
                <RequireAuth>
                  <ProfilePage />
                </RequireAuth>
                }></Route>
                <Route path='/profile' element={<ProfilePage />}></Route>   
                <Route path='/LoginForm' element={<LoginForm />}></Route>
              </Routes>
            </div>
          </div>
        </Router>
      </>
    );    
  }
}

export default App;
