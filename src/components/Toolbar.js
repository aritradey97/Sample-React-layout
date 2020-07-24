import React from 'react';
import "./Toolbar.css"
import DrawerToggleButton from './DrawerToggleButton';

const toolBar = (props) => (
    <header className="toolbar">
        <nav className='toolbar_navigation'>
            <div></div>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo">
                <a href="/">THE LOGO</a>
            </div>
            <div className='spacer'></div>
            <div className="toolbar_items">
                <ul>
                    <li><a href="/">User</a></li>
                    <li><a href="/">Product</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolBar;