import React from 'react';
import './Menu.css';

function Sidebar() {

  const handleLogoutClick = () => {
    // Handle logout logic here
    console.log('Logging out...');
  };

  return (

    <div>
      <div className="sidebar">
        <div>
        <h1 className='is-bold is-size-3'>MiniApp</h1>
        </div>
        
        <nav>
          <a href="/dashboard">Dashboard</a>
          {/* <a href="/user" >User</a>
          <a href="/product">Product</a> */}
          <a href="/greeting">Greeting</a>
          <a href="/login" >Auth</a>
          <a href="/register" >Register</a>
          <a href="/redux" >Redux</a>
          <a href="/selector" >Selector</a>
          
        </nav>
        <div className='logout-btn'><button href="/logout" onClick={handleLogoutClick}>
          Logout
        </button></div>
      </div>

    </div>
  );
}

export default Sidebar;
