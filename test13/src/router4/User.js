import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import data from './data';

const User = () => {

    const {user} = useParams()
    const uProfile = data[user]

    return (
        <div>
            <h2>User 페이지 입니다.</h2>
            <h2>
                {uProfile.name} / {uProfile.job}
            </h2>
        </div>
    );
};

export default User;