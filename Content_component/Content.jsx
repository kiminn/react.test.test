import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Nav from './Nav';
import Create from './Create';

// { isDark }
const Content = ({ content, setMode, setId, topics }) => {
    const { isDark } = useContext(ThemeContext);

    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? '#333333' : '#ffebeb',
                color: isDark ? '#ffffff' : '#333333',
            }}
        >
            {/* Read로 변경됨 */}
            <Nav
                topics={topics}
                onChangeMode={(_id) => {
                    setMode('Read');
                    setId(_id);
                }}
            ></Nav>
            {content}
            <p className="mode">Mode Change (🌞/🌓) ↘️</p>
            <Create
                onClick={() => {
                    setMode('Create');
                }}
            >
                <a href="/create">Create</a>
            </Create>
        </div>
    );
};

export default Content;
