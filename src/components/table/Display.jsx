import React, { useState, useEffect } from 'react';

const Display = ({ setSelectedItems, selectedItems, dataCount, selectAll, setSelectAll, d }) => {

    const [selected, setSelected] = useState(false);
    const triggerSelection = (checked, id) => {
        // selectedItems.filter((item) => {
        //     console.log(item, id);
        //     console.log('filtering', item != id);
        // })
        setSelected(checked);
        setSelectedItems((init) => {
            console.log(init)
            let filteredItems = init.filter((item) => {
                if (item != id) {
                    return [...init, id]
                } else {
                    return init;
                }
            })
            return filteredItems;
        })

    }

    useEffect(() => {
        console.log('CHekcking', selectedItems.length);
        if (selectedItems.length == dataCount) {
            console.log('12345', selectedItems.length);
            setSelectAll(true)
        } else {
            setSelectAll(false)
        }

        return () => {

        }
    }, [selectedItems.length])


    useEffect(() => {
        if (selectAll) {
            setSelected(true);
        } else {
            setSelected(false);
        }
        return () => {

        }
    }, [selectAll])


    return (
        <>
            <div className="table__display_data" key={d.id}>
                <div className="checkbox">
                    <input type="checkbox"
                        onChange={(e) => {
                            triggerSelection(e.target.checked, d.id)
                        }}
                        name="check" checked={selected} />
                </div>
                <div className="name">
                    <p>{d.name}</p>

                </div>
                <div className="username">
                    <p>{d.username}</p>
                </div>
                <div className="email">
                    <p>{d.email}</p>
                </div>
                <div className="phone">
                    <p>{d.phone}</p>
                </div>
                <div className="website">
                    <p>{d.website}</p>
                </div>
                <div className="address">
                    <p>{d.address.street}</p>
                </div>
            </div>
        </>
    )
}

export default Display;