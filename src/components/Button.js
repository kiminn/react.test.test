import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();
    const onChangedPage = () => {
        navigate('/write')
    }

    return (
        <div class="btn_wrap">
            <button type="submit" onClick={onChangedPage} class="on_btn">
                등록
            </button>
            {/* <!-- <a href="#">수정</a> --> */}
        </div>
    );
};

export default Button;
