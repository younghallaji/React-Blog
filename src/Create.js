import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState('Sodiq');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body, author}
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('Successfully Added')
            setIsPending(false);
            history.push("/")
        })
    }
    return ( 
        <div className="create">
            <h2>Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <label>Author:</label>
                <select required value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Sodiq">Sodiq</option>
                    <option value="Pelumi">Pelumi</option>
                    <option value="Akin">Akin</option>
                    <option value="Asafe">Asafe</option>   
                </select>

                <label>Body</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Loading...</button>}
            </form>
            {/* <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p> */}
        </div>
     );
}
 
export default Create;