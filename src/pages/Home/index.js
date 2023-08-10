// import styled from ''
import styled from 'styled-components';
import { useState } from "react";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import { flexCenter } from 'styles/common.style';
import theme from 'styles/theme.style';

const HomePage = () => {
    const[isFormLogin, setIsFormLogin] = useState(false);
    // 기본적으로 false인 회원가입 보여줌
    // 삼항연산자! isFormLogin ? console.log() : console.log()
    //  isFormLogin이 true면 로그인 보여주고, 아니면 회원가입 보여줘라 

    // 구조분해할당
    const onChangeForm = (e) => {
        console.log(isFormLogin);
        const { innerText } = e.target;
        if( innerText === "SIGN-IN" ) return setIsFormLogin(true);
        return setIsFormLogin(false);
    }

    return(
        // 아래 wrapper는 signinform signupform과 달리 styled된 것이다
        <S.Wrapper>
            <S.Header>
                {/* innerText: SIGN-IN . SIGN-UP */}
                <div onClick={onChangeForm}>SIGN-IN</div> 
                <div onClick={onChangeForm}>SIGN-UP</div>
            </S.Header>
            {isFormLogin ? <SignInForm/> : <SignUpForm/>}
        </S.Wrapper>
    ) 
}

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    padding-bottom: 60px;
    ${flexCenter} // common.style.js
    flex-direction: column;
`

// props = properties = 속성 = 객체 = 구조 분해 할당 가능
// ${(props) => props.theme.COLORS.primary[300]}
const Header = styled.header`
    background-color: ${({theme}) => theme.COLORS.primary[300]};
    width: 360px;
    height: 48px;
    position: relative;
    display: flex; 

    div {
        width: 50%;
        ${flexCenter}
        cursor: pointer;
        &:hover {
            background-color: #e0e0e0;
        }
    }
`

// styled 되어있는 객체와 일반 객체 구분!
const S = {
    Wrapper,
    Header
}

export default HomePage;