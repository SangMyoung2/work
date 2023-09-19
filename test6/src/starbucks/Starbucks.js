import React,{useState} from 'react';
import '../assets/css/reset.css'
import './style.css'

import CoffeeList from './CoffeeList';
import Menu from './Menu';
import data from '../assets/api/menu'

const Starbucks = () => {

    const [menu,setMenu] = useState([
        {name:'all'},
        {name:'coldbrew'},
        {name:'espresso'},
        {name:'frappuccino'},
        {name:'fizzio'}
    ])

    const [coffee,setCoffee] = useState(data)

    const onMenu = (name) => {
        if(name==='all'){
            setCoffee(data)
        }else{
            setCoffee(data.filter(coffee=>coffee.name===name))
        }
    }

    return (
        <div className='wrap'>
            <h1>Starbucks Menu</h1>
            <Menu menu={menu} onMenu={onMenu}/>
            <CoffeeList coffee={coffee}/>
        </div>
    );
};

export default Starbucks;