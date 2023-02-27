import React from 'react';
import {Link} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <div className={'Header'}>
            <div className={'Link'}>
                <Link to={'/Movies'}>Movies</Link>
                <Link to={'/Search'}>Search</Link>
            </div>
            <div className={'User'}>
                <h3>User</h3>
            </div>
        </div>
    );
};

export {Header};