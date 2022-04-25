import React, { useState, useEffect } from "react";
import './Table.css';
import Display from "./Display";
import { data } from './Data';
import Button from "../button/Button";
import { useDebounce } from 'use-debounce';


const Table = () => {

    const [users, setUsers] = useState([]);
    const [searchData, setSearchData] = useState('');

    const [totalDisplay, setTotalDisplay] = useState(true);

    const deb = useDebounce(searchData.toLowerCase(), 1000);

    // if (deb === '') {
    //     setTotalDisplay(true)
    // } else {
    //     setTotalDisplay(false)
    // }


    function compareUserByUserName(a, b) {
        if (a.username < b.username) {
            return -1;
        }
        if (a.username > b.username) {
            return 1;
        }
        return 0;
    }

    useEffect(() => {
        setUsers(data.sort(compareUserByUserName));
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
                    <p>{deb}</p>
                </div>
                <div className="topbar__last">
                    <div className="topbar__input">
                        <input
                            type="text"
                            placeholder="Search here"
                            value={searchData}
                            onChange={(e) => setSearchData(e.target.value)}
                        />
                    </div>
                    <Button text='Add New' />
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
                        {totalDisplay &&
                            <Display
                                user={user}
                                handleChange={handleChange}
                            />}
                    </>
                )
            })}
        </div>
    )
}
export default Table;