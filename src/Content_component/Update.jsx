import { useState } from "react";

const Update = (props) => {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.title);

    return <article className="createArticle">
    <h2>Update</h2>
    {/* submit시 발생하는 이벤트 */}
    <form
        onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            props.onUpdate(title, body);
        }}
    >
        <label className="label">Title:</label>
        <p>
            <input type="text" name="title" placeholder="title" value={title} onChange={e => {
                setTitle(e.target.value);
            }}></input>
        </p>
        <label className="label">Body:</label>
        <p>
            <textarea name="body" placeholder="body" value={body} onChange={e =>{
                setBody(e.target.value);
            }}></textarea>
        </p>
        <p>
            <input type="submit" value="Update"></input>
        </p>
    </form>
</article>
}

export default Update