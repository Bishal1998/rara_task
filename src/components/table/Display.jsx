import React from 'react';

const Display = ({ user, handleChange }) => {


    return (
        <>
            <div className="table__display_data" key={user.id}>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        name={user.id}
                        checked={user.isChecked || false}
                        onChange={handleChange} />
                </div>
                <div className="name">
                    <p>{user.name}</p>

                </div>
                <div className="username">
                    <p>{user.username}</p>
                </div>
                <div className="email">
                    <p>{user.email}</p>
                </div>
                <div className="phone">
                    <p>{user.phone}</p>
                </div>
                <div className="website">
                    <p>{user.website}</p>
                </div>
                <div className="address">
                    <p>{user.address.street}</p>
                </div>
            </div>
        </>
    )
}

export default Display;