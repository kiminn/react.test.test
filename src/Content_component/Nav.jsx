
const Nav = (props) => {
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id}
                    href={'/read/' + t.id}
                    onClick={(e) => {
                        e.preventDefault();
                        // state강의 12:00 문자열로 끌고와진 id를 Number()변수로 컨버팅
                        props.onChangeMode(Number(e.target.id));
                    }}
                >
                    {t.title}
                </a>
            </li>
        );
    }
    return (
        <nav className="Nav">
            <ol>{lis}</ol>
        </nav>
    );
};

export default Nav;
