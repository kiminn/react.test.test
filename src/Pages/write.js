import Button2 from '../components/Button2';
import Header from '../components/Header';

const Write = (props) => {
    return (
        <>
            <div className="board_wrap">
                <Header></Header>
                <div class="board_write_wrap">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const title = e.target.title.value;
                            const name = e.target.user.value;
                            const body = e.target.body.value;
                            props.onCreate(title, name, body);
                        }}
                    >
                        <div class="board_write">
                            <div class="title">
                                <dl>
                                    <dt>제목</dt>
                                    <dd>
                                        <input type="text" name="title" placeholder="제목 입력" />
                                    </dd>
                                </dl>
                            </div>
                            <div class="info">
                                <dl>
                                    <dt>글쓴이</dt>
                                    <dd>
                                        <input type="text" name="user" placeholder="작성자 입력" />
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>비밀번호</dt>
                                    <dd>
                                        <input type="password" name="pw" placeholder="비밀번호 입력" />
                                    </dd>
                                </dl>
                            </div>
                            <div class="content">
                                <textarea type="body" placeholder="내용 입력"></textarea>
                            </div>
                            <Button2></Button2>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Write;
