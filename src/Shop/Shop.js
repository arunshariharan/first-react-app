import React from 'react';

const shop = (props) => {
    return (
        <div>
            <p>Shop name: {props.name} (Nickname: {props.nickname})</p>
            <p>Shop location: {props.location}</p>
            <p>Shop distance from home: {props.distance}</p>
            <p>Enter a nickname: <input type='text' onChange={props.changed} /></p>
        </div>
    )
}

export default shop;