import React, { useState, useEffect } from 'react';
import '../ClassComponent/component.css'

function HooksContent() {
    console.log("constructor inisiasi")
    const [name, setName] = useState('Ricky Firmansyah');
    const [email, setEmail] = useState('Ricky_Firmansyah2707@gmail.com');
    const [phone, setPhone] = useState('0822-8128-2646');
    const [title, setTitle] = useState("Detail Mahasiswa")

    useEffect(() => {
        console.log("ComponenDidMount => Active")
        setTimeout(() => {
            setTitle('Detail Mahasiswa => Method DidMount Hooks');
            setName('Ricky');
            setEmail('Ricky@admin.com');
            setPhone('0822xxxxxxxx')
        }, 3000);
        return () => {
            console.log("ComponentWillUnMount => Active")
        }
    }, []);

    console.log("render detail")
    return (
        <div>
            <h3>{title}</h3>
            <div className='profile'>
                <div className='card'>
                    <img style={{ margin: '30px' }} src="https://via.placeholder.com/150" alt="profile pic" />
                    <h3>Name: {name}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Phone: {phone}</h3>
                </div>
            </div>
        </div>
    );
}

export default HooksContent;
