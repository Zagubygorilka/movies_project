import React from 'react';
import css from './Header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <div>
                <Link to={'/Movies'}>Movies</Link>
                <Link to={'/Search'}>Search</Link>
            </div>
        </div>
    );
};

export {Header};