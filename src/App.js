import { useState } from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
    const [isDark, setIsDark] = useState(false); // 기본적으로 isDark가 꺼져있음

    return (
        <UserContext.Provider value={'User'}>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                {/* value 안에는 전달하고자하는 데이터를 집어넣는다
             모든 하위컴포넌트에 전달해야하는 isDark, setIsDark 넣어주기
          props를 사용하지않고 접근할 수 있다 */}
                {/* <Page isDark={isDark} setIsDark={setIsDark}/> */}
                <Page />
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
