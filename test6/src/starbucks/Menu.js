import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({menu,onMenu}) => {
    return (
        <div className='menu'>
            {
            menu.map(item=><MenuItem key={item.name} item={item} onMenu={onMenu}/>)
            }
        </div>
    );
};

export default Menu