import { Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css';

export default function Edit() {
    const id = window.document.location.pathname.split('/')[ 2 ]
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState(0);
    const [ description, setDescription ] = useState('');
    const history = useHistory();

    useEffect(() => {
        return axios.get(`http://localhost:3001/edit/${id}`).then(res => {
            setName(res.data.name)
            setAge(res.data.age)
            setDescription(res.data.description)
        });
    }, [ id ])

    const handleForm = async e => {
        e.preventDefault();
        await axios.patch(`http://localhost:3001/patch/${id}`, { name, age, description }).then(() => { alert('updated'); history.push('/') }).catch(e => alert(e.message))
    }
    return (
        <div className='d-flex flex-column'>
            <p className="text-center">Edit Friend</p>
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input value={name || ''} onChange={e => setName(e.target.value)} autoComplete='off' name='name' type='text' className="form-control" id="exampleInputEmail1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Number</label>
                    <input value={age || ''} onChange={e => setAge(e.target.value)} autoComplete='off' name='age' type='number' className="form-control" id="exampleInputEmail1" />
                </div>
                <div className='input-group'>
                    <label htmlFor='description' className="form-label">Description</label>
                    <textarea className="form-control w-100" id='description' value={description || ''} onChange={e => setDescription(e.target.value)} name='description'></textarea>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn  btn-primary mt-3 w-25">Update</button>
                    <Link to='/' className='btn btn-dark w-25 mt-3 text-decoration-none text-center'>Back</Link>
                </div>
            </form>
        </div>
    )
}
