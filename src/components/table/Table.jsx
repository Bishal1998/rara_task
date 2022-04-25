import React, { useState, useEffect, useCallback } from "react";
import './Table.css';
import Display from "./Display";
import { data } from './Data';
import Button from "../button/Button";
import debounce from 'lodash.debounce';


const Table = () => {

    const [users, setUsers] = useState([]);
    const [searchData, setSearchData] = useState('');


    const changeHandler = event => {
        setSearchData(event.target.value);
    };

    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 500)
        , []);


    // const keys = ['id', 'name', 'username', 'email', 'phone', 'website', 'address.street'];

    // const search = (data) => {
    //     return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(searchData)))
    // }


    const compareUserByUserName = (a, b) => {
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

    // useEffect(() => {
    //     if (searchData) {
    //         setUsers((init) => {
    //             let filteredData = init.filter((item) => item.username.includes(searchData))
    //             return filteredData.sort(compareUserByUserName)
    //         });
    //     } else {
    //         setUsers(data.sort(compareUserByUserName));
    //     }

    //     return () => {

    //     }
    // }, [searchData.length])


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
                    <p>{searchData}</p>
                </div>
                <div className="topbar__last">
                    <div className="topbar__input">
                        <input
                            type="text"
                            placeholder="Search here"
                            defaultValue={searchData}
                            onChange={debouncedChangeHandler}
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