import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

// {isDark}
const Header = (props) => {
    console.log('props:', props.title)
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);
    console.log('isDark :', isDark);
    console.log(user); 
    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? 'black' : '#ff7cc8',
                color: isDark ? 'white' : '#2d2d2d',
            }}
        >
            <h1 >💕 {props.title}, <a href='/' onClick={e => {
                e.preventDefault();
                props.onChangeMode();
            }}>{user}</a></h1>
        </header>
    );
};

export default Header;
