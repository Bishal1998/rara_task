import React, { useState, useEffect } from "react";
import './Table.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Display from "./Display";
import { data } from './Data';

const Table = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(data);
    }, [])

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'main') {
            let tempUser = users.map((user) => { return { ...user, isChecked: checked } });
            setUsers(tempUser);
        } else {
            let tempUser = users.map((user) => user.id === name ? { ...user, isChecked: checked } : user);
            setUsers(tempUser);
        }
    }

    return (
        <div className="table">
            <div className="topbar">
                <div className="topbar__name">
                    <p>Users</p>
                </div>
                <div className="topbar__last">
                    <div className="topbar__input">
                        <input type="text" placeholder="Search here" />
                    </div>
                    <div className="topbar__add">
                        <button className="button_add"><AiOutlinePlusCircle /> Add New</button>
                    </div>
                </div>
            </div>
            <div className="table__display">
                <div className="checkbox">
                    <input
                        type="checkbox"
                        name='main'
                        id="check"
                        checked={users.filter(user => user.isChecked !== true).length < 1}
                        onChange={handleChange}
                    />
                </div>
                <div className="name">
                    <h6>Name</h6>
                </div>
                <div className="username">
                    <h6>Username</h6>
                </div>
                <div className="email">
                    <h6>Email</h6>
                </div>
                <div className="phone">
                    <h6>Phone</h6>
                </div>
                <div className="website">
                    <h6>Website</h6>
                </div>
                <div className="address">
                    <h6>Address</h6>
                </div>
            </div>
            {users.map((user) => {
                return (
                    <>
                        <Display
                            user={user}
                            handleChange={handleChange}
                        />
                    </>
                )
            })}
        </div>
    )
}
export default Table;