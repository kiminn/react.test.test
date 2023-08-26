

const Article = (props) => {
    console.log(props.title, props.body)
    return (
        <article className='welcome'>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
};

export default Article;
