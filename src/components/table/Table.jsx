import React, { useState } from "react";
import './Table.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Display from "./Display";
import { data } from './Data';

const Table = () => {

    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleCheck = (e) => {
        setSelectAll(e.target.checked)
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
                    <input type="checkbox" name="check" id="check" checked={selectAll}
                        onChange={handleCheck}
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
            <h1>{selectedItems.length}{data.length}</h1>
            {data.map((d) => {
                return (
                    <>
                        <Display
                            setSelectedItems={setSelectedItems}
                            selectedItems={selectedItems}
                            selectAll={selectAll}
                            setSelectAll={setSelectAll}
                            totalDataCount={data.length}
                            d={d}
                        />
                    </>
                )
            })}
        </div>
    )
}
export default Table;