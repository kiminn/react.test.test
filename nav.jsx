const Nav = (props) => {
    const lis = []

    for(let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
        // 왜 두 개 다 t.id?
        lis.push(<li key={t.id}>
            {/* 태그의 속성은 문자임 */}
            <a id={t.id} 
            href={"/read" + t.id} onClick={e => {
                e.preventDefault();
                props.onChangeMode(Number(e.target.id));
            }}
            >{t.title}</a></li>)
    }

    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    );
};

export default Nav;
