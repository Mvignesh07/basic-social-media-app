import React from 'react'
import { useParams } from 'react-router-dom';

const PostPage = ({posts, handleDelete, handleEdit}) => {
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    return (
        <main className='PostPage'>
            <br />
            <article className='post'>
                {post &&
                    <div className='PostPageContent'>
                        <h2 style={{color:"blue"}}>{post.title}</h2>
                        <p className='postDate'>{post.date}</p>
                        <p className='postBody'>{post.body}</p>
                        <br />
                        <button className='editPostBtn' onClick={()=>handleEdit(post.id)}>
                            Edit Post
                        </button>
                        <button className='deletePostBtn' onClick={()=>handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </div>
                }
                {!post && 
                    <>
                        <h2>Page Not Found</h2>
                        <p>Well, that's disappointing</p>
                        <p>
                            Visit Our Homepage
                        </p>                  
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage