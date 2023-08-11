import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

// { isDark }
const Content = () => {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? '#333333' : '#ffebeb',
                color: isDark ? '#ffffff' : '#ff0095',
            }}
        >
            <p>{user}, Click the button below ↘️</p>
        </div>
    );
};

export default Content;
