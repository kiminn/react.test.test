const Create = (props) => {
    return (
        <article className="createArticle">
            <h2>Create</h2>
            {/* submit시 발생하는 이벤트 */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const body = e.target.body.value;
                    props.onCreate(title, body);
                    console.log('title:', title, 'body:', body)
                }}
            >
                <label className="label">Title:</label>
                <p>
                    <input type="text" name="title" placeholder="title"></input>
                </p>
                <label className="label">Body:</label>
                <p>
                    <textarea name="body" placeholder="body"></textarea>
                </p>
                <p>
                    <input type="submit" value="Create"></input>
                </p>
            </form>
        </article>
    );
};

export default Create;
