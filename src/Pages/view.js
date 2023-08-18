import Button2 from '../components/Button2';
import Header from '../components/Header';

const View = () => {

    return (
        <div class="board_wrap">
            <Header></Header>
            <div class="board_view_wrap">
                <div class="board_view">
                    <div class="title">글 제목이 들어갑니다.</div>
                    <div class="info">
                        {/* <!-- dt에는 제목 dd에는 내용이 들어간다 --> */}
                        <dl>
                            <dt>번호</dt>
                            <dd>1</dd>
                        </dl>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>닉네임</dd>
                        </dl>
                        <dl>
                            <dt>작성일</dt>
                            <dd>2023.8.15</dd>
                        </dl>
                        <dl>
                            <dt>조회</dt>
                            <dd>20</dd>
                        </dl>
                    </div>
                    <div class="content">
                        글 내용이 들어갑니다. {('\n')}
                        글 내용이 들어갑니다. {('\n')}
                        글 내용이 들어갑니다. {('\n')}
                        글 내용이 들어갑니다. {('\n')}
                        글 내용이 들어갑니다. {('\n')}
                        글 내용이 들어갑니다. {('\n')}
                        글 내용이 들어갑니다. {('\n')}
                        글 내용이 들어갑니다. {('\n')}
                        글 내용이 들어갑니다.
                    </div>
                    <Button2></Button2>
                </div>
            </div>
        </div>
    );
};

export default View;
