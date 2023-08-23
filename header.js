const Header = (props) => {
    return (
        <div>
            <h2>
                <a href="/" onClick={e => {
                    e.preventDefault();
                    props.onChangeMode();
                }}>
                    {props.title}
                </a>
            </h2>
        </div>
    );
};

export default Header;
