import Button2 from '../components/Button2';
import Header from '../components/Header';

const Write = () => {
    // let isWrite = true;

    return (
        <>
            <div className="board_wrap">
                <Header></Header>
                <div class="board_write_wrap">
                    <div class="board_write">
                        <div class="title">
                            <dl>
                                <dt>제목</dt>
                                <dd>
                                    <input type="text" placeholder="제목 입력" />
                                </dd>
                            </dl>
                        </div>
                        <div class="info">
                            <dl>
                                <dt>글쓴이</dt>
                                <dd>
                                    <input type="text" placeholder="작성자 입력" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>비밀번호</dt>
                                <dd>
                                    <input type="password" placeholder="비밀번호 입력" />
                                </dd>
                            </dl>
                        </div>
                        <div class="content">
                            <textarea placeholder="내용 입력"></textarea>
                        </div>
                        <Button2></Button2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Write;
