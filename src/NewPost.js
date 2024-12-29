import React from 'react'

const NewPost = ({
    handleSubmit, postTitle, setPostTitle, postBody, setPostBody
}) => {
  return (
    <main className='NewPost'>
        <marquee direction="right" height="100px"><h2 style={{color:"blue"}}>Post your content here!</h2></marquee>
        <form className='newPostForm' onSubmit={handleSubmit}>
            
            <input 
                id='postTitle'
                type='text'
                required
                placeholder='Title'
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            /><br></br><br></br><br></br>
            
            <textarea
                id='postBody'
                required
                placeholder='Type your post...'
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
            ></textarea><br></br>
            <button className='PostSubmitBtn' type='submit'>SUBMIT</button>
        </form>
    </main>
  )
}

export default NewPost