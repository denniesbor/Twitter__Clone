import React from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            {/* {header*/}
            <div className = 'feed__header'>
                <h2>Home</h2>
            </div>
            {/* {tweetbox} */}
            <Tweetbox />

            {/* {posts} */}
           <Post />

        </div>
    )
}

export default Feed
