import React from 'react';
import {Link, Route} from 'react-router-dom'
import data from './data'
import Front from './Front';

const Profile = () => {
    return (
        <div>
            <h1>Profile 페이지 입니다.</h1>
            <ul>
                <li><Link to='/profile/html'>html</Link></li>
                <li><Link to='/profile/css'>css</Link></li>
                <li><Link to='/profile/javascript'>javascript</Link></li>
                <li><Link to='/profile/react'>react</Link></li>
            </ul>
            <Route path='/profile/:name'>
                <Front data={data}/>
            </Route>
        </div>
    );
};

export default Profile;