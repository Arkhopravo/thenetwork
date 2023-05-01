import React from 'react'
import './Posts.scss'
import Post from '../post/Post'

const Posts = () => {

    const posts = [
        {
            id:1,
            name: "Matt Murdock",
            userId:1,
            profilePic:"https://hips.hearstapps.com/hmg-prod/images/dwayne-the-rock-johnson-gettyimages-1061959920.jpg?crop=0.75xw:1xh;center,top&resize=1200:*",
            desc:"",
            img:""
        },
        {
            id:2,
            name: "John Wick",
            userId:2,
            profilePic:"https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/558524/KeanuReeves-2021_r.jpg",
            desc:"",
            
        },
        
    ]
  return (
    <div className='posts'>
        {posts.map(post=>(
           < Post post={post} key={post.id[1]}/>
            // < Post post={post} key={post.id[2]}/>
        ))}
        {posts.map(post=>(
        //    < Post post={post} key={post.id[1]}/>
            < Post post={post} key={post.id[2]}/>
        ))}
    </div>
  )
}

export default Posts