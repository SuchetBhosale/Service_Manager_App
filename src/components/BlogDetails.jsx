import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';

export default function BlogDetails(){
  const { id } = useParams()
  const post = blogsData.find(b => String(b.id) === id)
  if(!post) return <div><p>Post not found.</p><Link to="/blog">Back</Link></div>

  return (
    <article>
      <h2 style={{backgroundColor: "burlywood"}}><center>{post.title}</center></h2>
      <center><img src={post.image} alt={post.title} style={{maxWidth:'100%'}} />
      <div>{post.content}</div>
      <Link to="/blog">← Back to posts</Link>
      </center>
    </article>
  )
}