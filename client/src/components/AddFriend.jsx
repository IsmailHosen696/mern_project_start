import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export default function AddFriend() {
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState(0);
    const [ description, setDescription ] = useState('');
    const history = useHistory()
    const handleForm = e => {
        e.preventDefault();

        axios.post('http://localhost:3001/add', { name, age, description }).then(() => {
            alert('added data');
            history.push('/');
        }).catch(e => {
            alert(e.message);
        })
    }
    return (
        <div>
            <p>Add Friend List</p>
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input placeholder='add name here' required value={name || ''} onChange={e => setName(e.target.value)} autoComplete='off' name='name' type='text' className="form-control" id="exampleInputEmail1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number</label>
                    <input placeholder='add number here' required value={age || ''} onChange={e => setAge(e.target.value)} autoComplete='off' name='age' type='number' className="form-control" id="number" />
                </div>
                <div className='input-group'>
                    <label htmlFor='description' className='form-label'>Description</label>
                    <textarea placeholder='add description here' className="form-control w-100" required id='description' value={description || ''} onChange={e => setDescription(e.target.value)} name='description'></textarea>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn  btn-primary mt-3 w-25">Add</button>
                    <Link to='/' className='btn btn-dark w-25 mt-3 text-decoration-none text-center'>Back</Link>
                </div>
            </form>
        </div>
    )
}
