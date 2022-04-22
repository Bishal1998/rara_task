import React from 'react';
import { data } from "./Data";

const Display = ({ handleChange, select }) => {

    return (
        <>
            {data.map((d) => {
                return (
                    <>
                        <div className="table__display_data" key={d.id}>
                            <div className="checkbox">
                                <input type="checkbox" name="check" checked={select} onChange={handleChange} />
                            </div>
                            <div className="name">
                                <p>Name</p>

                            </div>
                            <div className="username">
                                <p>Username</p>
                            </div>
                            <div className="email">
                                <p>Email</p>
                            </div>
                            <div className="phone">
                                <p>Phone</p>
                            </div>
                            <div className="website">
                                <p>Website</p>
                            </div>
                            <div className="address">
                                <p>Address</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Display