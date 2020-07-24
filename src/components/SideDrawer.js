import React from 'react';
import './SideDrawer.css'

export const SideDrawer = (props) => {
    let drawerClass = 'side_drawer';
    if (props.show) {
        drawerClass = 'side_drawer open';
    }
    return (
    <div className={drawerClass}>
        <ul>
            <li><a href='/'>Users</a></li>
            <li><a href='/'>Products</a></li>
        </ul>
    </div>
)};

export const BackDrop = (props) => (
    <div className='back_drop' onClick={props.onClickHandler}></div>
);
