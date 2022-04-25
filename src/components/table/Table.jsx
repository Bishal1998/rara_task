import React, { useState, useEffect, useCallback } from "react";
import './Table.css';
import Display from "./Display";
import Button from "../button/Button";
import debounce from 'lodash.debounce';


const Table = ({ data }) => {

    const [users, setUsers] = useState([]);
    const [searchData, setSearchData] = useState('');


    const changeHandler = event => {
        setSearchData(event.target.value);
    };

    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 100)
        , []);

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

        if (searchData) {
            setUsers(() => {
                // console.log('changing', searchData)

                let filteredData = data.filter((item) => {

                    return item.username.toLowerCase().includes(searchData.toLowerCase()) || item.name.toLowerCase().includes(searchData.toLowerCase()) || item.email.toLowerCase().includes(searchData.toLowerCase()) || item.phone.toLowerCase().includes(searchData.toLowerCase()) || item.website.toLowerCase().includes(searchData.toLowerCase()) || item.address.street.toLowerCase().includes(searchData.toLowerCase())

                })
                return filteredData.sort(compareUserByUserName)
            });
        } else {
            setUsers(data.sort(compareUserByUserName));
        }
        return () => {

        }
    }, [searchData.length])


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
                        <input
                            type="text"
                            placeholder="Search here"
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
                    <Display
                        user={user}
                        handleChange={handleChange}
                        key={user.id}
                    />
                )
            })}
        </div>
    )
}
export default Table;