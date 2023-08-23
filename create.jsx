// html form sample

import Header from './header';
import Nav from './nav';
import { useState } from 'react';

const Create = (props) => {
    // 내용 출력 props.title
    console.log('props', props, props.title);

    const topics = [
        { id: 1, title: 'html', body: 'is html...' },
        { id: 2, title: 'css', body: 'is css...' },
        { id: 3, title: 'react', body: 'is react...' },
    ];

    // Welcome or Read
    const [text, setText] = useState('Welcome');
    const [id, setId] = useState(null);
    let content = null;
    console.log(topics);

    if (text === 'Welcome') {
        content = <div title="Welcome">'My Page, Welcome'</div>;
        // 해결: && props.topics != 'undefined' && props.topics != null
    } else if (text === 'Read') {
        let title,
            body = null;
        for (let i = 0; i < topics.length; i++) {
            console.log(topics[i].id, id);
            // id state와 일치
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = (
            <div title={title} body={body}>
                {title} {body}
            </div>
        );
    }

    return (
        <div>
            <Header
                title="BOARD"
                onChangeMode={() => {
                    setText('Welcome');
                }}
            ></Header>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert('Create!');
                }}
            >
                <label for="id">ID:</label>
                <p>
                    <input type="text" name="title" placeholder="제목을 입력하세요."></input>
                </p>
                <label for="pw">Content:</label>
                <p>
                    <textarea type="body" name="content" placeholder="내용을 입력하세요."></textarea>
                </p>
                <input type="submit" value="submit" />
            </form>
            {/* props로 전달되는 topics */}
            <Nav
                topics={topics}
                onChangeMode={(_id) => {
                    setText('Read');
                    setId(_id);
                }}
            />
            {content}
        </div>
    );
};

export default Create;
