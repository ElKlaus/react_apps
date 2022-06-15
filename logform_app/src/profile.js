import React from 'react';
import { Navigate } from "react-router-dom";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    localStorage.setItem('isLogged', 'isOuted');
    this.setState(({ forRerender: 'on'}));
  };

  render() {
    const isLogged = localStorage.getItem('isLogged') === 'isLogged';

    return (
      <>
        {!isLogged && (<Navigate to='/login' replace={true} />)}
        <div className="profile"><button onClick={this.handleClick}>Выйти</button></div>
      </>
    )
  }
}

export default ProfilePage;