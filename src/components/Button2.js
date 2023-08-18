import { useNavigate } from 'react-router-dom';

const Button2 = () => {
    const navigate = useNavigate();
    const onClickChangedView = (e) => {
        e.preventDefault();
        navigate('/view');
    };

    const onClickChangedEdit = (e) => {
        e.preventDefault();
        navigate('/Edit');
    };
    const onClickChangedPage = () => {
        navigate('/');
        // App.js에서 쓴 경로를 입력해야함
    };

    return (
        <div class="btn_wrap">
            <button type="submit" onClick={onClickChangedView} class="on_btn">
                등록
            </button>
            <button onClick={onClickChangedEdit} class="on_btn">
                수정
            </button>
            <button onClick={onClickChangedPage}>취소</button>
        </div>
    );
};

export default Button2;
