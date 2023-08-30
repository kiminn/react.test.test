import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Nav from './Nav';

// { isDark }
const Content = ({ content, setMode, setId, topics }) => {
    const { isDark } = useContext(ThemeContext);

    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? '#444444' : '#ffebeb',
                color: isDark ? '#ffffff' : '#444444',
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
            {/* Create */}
            <ul>
                <li className="create">
                    <a
                        href="/create"
                        onClick={(e) => {
                            e.preventDefault();
                            setMode('Create');
                        }}
                    >
                        Create
                    </a>
                </li>
                {/* update는 언제나 보이는 것이 아닌 mode===read일때 수정하는 용도로! */}
                {/* <li className="update">
                    <a
                        href="/update"
                        onClick={(e) => {
                            e.preventDefault();
                            setMode('Update');
                        }}
                    >
                        Update
                    </a>
                </li> */}
            </ul>
            <p className="mode">Mode Change (🌞/🌓) ↘️</p>
        </div>
    );
};

export default Content;
