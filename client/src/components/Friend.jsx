import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Friend() {
    const [ friends, setFriends ] = useState([]);
    const handleDel = e => {
        e.preventDefault();
        if (window.confirm(`do you want to delete friend ${e.target.id}`)) {
            axios.delete(`http://localhost:3001/del/${e.target.id}`).then(() => {
                alert('friend deleted');
                console.log('del');
            }).catch(e => {
                alert(e.message)
            })
        } else {
            return;
        }
    }
    useEffect(() => {
        return axios.get('http://localhost:3001/get').then(res => setFriends(res.data));
    })
    return (
        <div className='d-flex flex-column w-100 justify-content-center align-items-center mt-4'>
            <p className='text-center'>Friend Lists</p>
            <table className="table w-50 table-bordered align-items-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Description</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        friends.map((friend, index) => (
                            <tr key={friend._id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{friend.name}</td>
                                <td>{friend.age}</td>
                                <td>{friend.description}</td>
                                <td id={friend._id}><button id={friend._id} className='btn btn-danger ' onClick={handleDel}><i id={friend._id} className='fa fa-times'></i> Del</button></td>
                                <td> <Link to={`/edit/${friend._id}`} className='btn btn-warning'><i className='fa fa-edit'></i>Edit</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to='/add' className='text-decoration-none btn btn-info'>Add Friend</Link>
        </div>
    )
}
