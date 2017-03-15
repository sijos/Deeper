import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="nav-bar">
        <AuthContainer />
      </div>
    );
  }
}

export default NavBar;
