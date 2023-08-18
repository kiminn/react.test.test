import Button from '../components/Button';
import Header from '../components/Header';

const List = () => {
    return (
        <div class="board_wrap">
            <Header></Header>
            <div class="board_list_wrap">
                <div class="board_list">
                    <div class="list_top">
                        <div class="num">번호</div>
                        <div class="title">제목</div>
                        <div class="writer">글쓴이</div>
                        <div class="date">작성일</div>
                        <div class="count">조회</div>
                    </div>
                    <div>
                        <div class="num">5</div>
                        <div class="title">
                            <a href="view.html">글 제목이 들어갑니다.</a>
                        </div>
                        <div class="writer">닉네임</div>
                        <div class="date">2023.8.5</div>
                        <div class="count">20</div>
                    </div>
                    <div>
                        <div class="num">4</div>
                        <div class="title">
                            <a href="view.html">글 제목이 들어갑니다.</a>
                        </div>
                        <div class="writer">닉네임</div>
                        <div class="date">2023.8.5</div>
                        <div class="count">20</div>
                    </div>
                    <div>
                        <div class="num">3</div>
                        <div class="title">
                            <a href="view.html">글 제목이 들어갑니다.</a>
                        </div>
                        <div class="writer">닉네임</div>
                        <div class="date">2023.8.5</div>
                        <div class="count">20</div>
                    </div>
                    <div>
                        <div class="num">2</div>
                        <div class="title">
                            <a href="view.html">글 제목이 들어갑니다.</a>
                        </div>
                        <div class="writer">닉네임</div>
                        <div class="date">2023.8.5</div>
                        <div class="count">20</div>
                    </div>
                    <div>
                        <div class="num">1</div>
                        <div class="title">
                            <a href="view.html">글 제목이 들어갑니다.</a>
                        </div>
                        <div class="writer">닉네임</div>
                        <div class="date">2023.8.5</div>
                        <div class="count">20</div>
                    </div>
                </div>
                <div class="board_page">
                    <a href="#" class="btn first">
                        {'<<'}
                    </a>
                    <a href="#" class="btn prev">
                        {'<'}
                    </a>
                    <a href="#" class="num on">
                        1
                    </a>
                    <a href="#" class="num">
                        2
                    </a>
                    <a href="#" class="num">
                        3
                    </a>
                    <a href="#" class="num">
                        4
                    </a>
                    <a href="#" class="num">
                        5
                    </a>
                    <a href="#" class="btn next">
                        {'>>'}
                    </a>
                    <a href="#" class="btn last">
                        {'>'}
                    </a>
                </div>
                <Button></Button>
            </div>
        </div>
    );
};

export default List;
