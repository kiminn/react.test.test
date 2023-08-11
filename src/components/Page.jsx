// import { useContext } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
// import { ThemeContext } from '../context/ThemeContext';

// { isDark, setIsDark }
const Page = () => {
    // const data = useContext(ThemeContext);
    // console.log('data :', data);

    return (
        <div className="page">
            {/* <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} /> */}
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Page;
