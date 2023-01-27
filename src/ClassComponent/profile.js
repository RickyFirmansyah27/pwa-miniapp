import React from 'react';
import { Link } from 'react-router-dom'
import './component.css'
import Content from './content';

class Profile extends React.Component {
  state = {
    name: "Ricky Firmansyah",
    email: "rickyfirmansyah2707@gmail.com",
    phone: "0822-8128-2646",
    isDetail: false
  }

  handleDetail() {
    this.setState({
      isDetail: !this.state.isDetail
    })
  }

  render() {
    console.log("render mahasiswa")
    return (
      <div>
        <h3>List Mahasiswa</h3>

        <div className='ListProfile'>
          <div className='ListCard'>
            <img className='mid-img' src="https://via.placeholder.com/150" alt="profile pic" />
            <h3>Name: {this.state.name}</h3>
            <h3>Email: {this.state.email}</h3>
            <h3>Phone: {this.state.phone}</h3>
            <Link className='mid-btn' to='/p'><button>Check</button></Link>
          </div>

          <div className='ListCard'>
            <img className='mid-img' src="https://via.placeholder.com/150" alt="profile pic" />
            <h3>Name: {this.state.name}</h3>
            <h3>Email: {this.state.email}</h3>
            <h3>Phone: {this.state.phone}</h3>
            <Link className='mid-btn' to='/p'><button>Check</button></Link>
          </div>

          <div className='ListCard'>
            <img className='mid-img' src="https://via.placeholder.com/150" alt="profile pic" />
            <h3>Name: {this.state.name}</h3>
            <h3>Email: {this.state.email}</h3>
            <h3>Phone: {this.state.phone}</h3>
            <Link className='mid-btn' to='/p'>
              <button>Check</button>
            </Link>
          </div>
        </div>
        <hr />
        <button className='midBtn' onClick={() => this.handleDetail()}>Check</button>
        {this.state.isDetail && <Content />}
      </div>
    );
  }
}



export default (Profile);
