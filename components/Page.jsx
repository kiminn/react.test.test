// import { useContext } from 'react';
import { useState } from 'react';
import Article from '../Content_component/Article';
import Content from '../Content_component/Content';
import Footer from './Footer';
import Header from './Header';
import Create from '../Content_component/Create';
// import { ThemeContext } from '../context/ThemeContext';

// { isDark, setIsDark }
const Page = () => {
    // const data = useContext(ThemeContext);
    // console.log('data :', data);
    const [mode, setMode] = useState('Welcome');
    const [id, setId] = useState(null); // 초기값 없음
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        { id: 1, title: '정방폭포', body: '주소: 제주특별자치도 서귀포시 칠십리로214번길 37' },
        { id: 2, title: '성산 일출봉', body: '주소: 제주특별자치도 서귀포시 성산읍 성산리 일출로 284-12' },
        { id: 3, title: '오설록 티 뮤지엄', body: '주소: 제주특별자치도 서귀포시 안덕면 신화역사로 15' },
    ]);
    let content = null;
    if (mode === 'Welcome') {
        content = <Article title="Welcome" body="You can CRUD"></Article>;
    } else if (mode === 'Read') {
        let title,
            body = null;
        for (let i = 0; i < topics.length; i++) {
            console.log(topics[i].id, id);
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>;
    } else if (mode === 'Create') {
        content = (
            <Create
                onCreate={(_title, _body) => {
                    const newTopic = { id: nextId, title: _title, body: _body };
                    const newTopics = [...topics];
                    newTopics.push(newTopic);
                    setTopics(newTopics);
                    setMode('Read'); // 해야만 읽기모드로 제목과 내용
                    setId(nextId);
                    setNextId(nextId + 1);
                }}
            ></Create>
        );
    }
    return (
        <div className="page">
            {/* <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} /> */}
            <Header
                title="Welcome"
                onChangeMode={function () {
                    setMode('Welcome');
                }}
            />
            {/* setMode prop으로 내려주기 => Content.jsx에서 쓸 수 있다.*/}
            <Content content={content} setMode={setMode} setId={setId} topics={topics} />
            <Footer />
        </div>
    );
};

export default Page;
