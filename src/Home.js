import React from 'react'
import Feed from './Feed'
const Home = ({posts}) => {
  return (
    <div className='Home'>
        {posts.length ? (
            <Feed posts={posts}/>
        ) : (
            <p style={{marginTop : "2rem"}}>
                No Posts to display
            </p>
        )}
    </div>
  )
}

export default Home