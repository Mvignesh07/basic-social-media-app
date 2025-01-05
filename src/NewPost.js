import React from 'react';
import UseNavigateOnRefresh from './UseNavigateOnRefresh';

const NewPost = ({
    handleSubmit, postTitle, setPostTitle, postBody, setPostBody
}) => {
    UseNavigateOnRefresh();
    return (
        <main className='NewPost'>
            <marquee direction="right" height="100px">
                <h2 className="formTitle">
                    {postTitle ? "Edit your post here!" : "Create a new post here!"}
                </h2>
            </marquee>
            <br />
            <form className='newPostForm' onSubmit={handleSubmit}>
                <input 
                    id='postTitle'
                    type='text'
                    required
                    placeholder='Post Title'
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    className="inputField"
                />
                <textarea
                    id='postBody'
                    required
                    placeholder='Share your thoughts...'
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    className="inputField"
                ></textarea><br></br>
                <button className='PostSubmitBtn' type='submit'>SUBMIT</button>
            </form>
        </main>
    )
}

export default NewPost;
