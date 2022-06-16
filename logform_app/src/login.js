import React from 'react';
import { Navigate } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      defUser: 'Admin',
      defPassword: '12345',
      auth: false,
    }

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
 
  handleChangeUser = (event) => {
    const userValue = event.target.value;

    this.setState({ user: userValue });
  };

  handleChangePassword = (event) => {
    const userPassword = event.target.value;

    this.setState({ password: userPassword });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { user, password } = this.state;

    const isLogged = (user === this.state.defUser) && (password === this.state.defPassword) ? 'isLogged' : 'isOuted';

    localStorage.setItem('isLogged', isLogged);

    this.setState(({ forRerender: 'on'}));

    if (isLogged === 'isOuted') {
      alert('Введен неверный логин/пароль');
    }
  };

  render() {
    const isLogged = localStorage.getItem('isLogged') === 'isLogged';

    return (
      <div className='login'>
        {isLogged && (<Navigate to='/profile' replace={true} />)}
        <form onSubmit={this.handleFormSubmit} className="login__form">
          <label>
            <input type="text" name="user" placeholder="Имя пользователя" onChange={this.handleChangeUser}/>
          </label>
          <label>
            <input type="password" name="password" placeholder="Пароль"  onChange={this.handleChangePassword}/>
          </label>
          <button type="submit" className='button'>Войти</button>
        </form>
      </div>
    );
  }
};

export default LoginForm;