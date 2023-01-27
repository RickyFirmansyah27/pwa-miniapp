import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../ClassComponent/component.css'
import HooksContent from './HooksContent';

const HooksProfile = () => {

    const [name] = useState("Ricky Firmansyah");
    const [email] = useState("rickyfirmansyah2707@gmail.com");
    const [phone] = useState("0822-8128-2646");

    const [isDetail, setIsDetail] = useState(false);
    return (
        <div>
            <h3>List Mahasiswa</h3>
            <div className='ListProfile'>
                <div className='ListCard'>
                    <img className='mid-img' src="https://via.placeholder.com/150" alt="profile pic" />
                    <h3>Name: {name}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Phone: {phone}</h3>
                    <Link className='mid-btn' to='/hc'><button>Check</button></Link>
                </div>

                <div className='ListCard'>
                    <img className='mid-img' src="https://via.placeholder.com/150" alt="profile pic" />
                    <h3>Name: {name}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Phone: {phone}</h3>
                    <Link className='mid-btn' to='/hc'><button>Check</button></Link>
                </div>

                 <div className='ListCard'>
                    <img className='mid-img' src="https://via.placeholder.com/150" alt="profile pic" />
                    <h3>Name: {name}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Phone: {phone}</h3>
                    <Link className='mid-btn' to='/hc'><button>Check</button></Link>
                </div>
            </div>
            <hr />
            <button className='midBtn' onClick={() => setIsDetail(!isDetail)}>Check</button>
            {isDetail && <HooksContent />}
        </div>
    );
}

export default (HooksProfile);