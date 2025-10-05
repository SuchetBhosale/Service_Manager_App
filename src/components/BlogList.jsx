import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../Data/blogs';

export default function BlogList(){
  const [blogs, setBlogs] = useState([])
  const [tag, setTag] = useState('All')
  const [query, setQuery] = useState('')

  useEffect(()=> setBlogs(blogsData), [])

  const tags = ['All', ...Array.from(new Set(blogsData.flatMap(b => b.tags || [])))]

  const filtered = blogs.filter(b => {
    if(tag !== 'All' && !(b.tags || []).includes(tag)) return false
    if(query && !b.title.toLowerCase().includes(query.toLowerCase())) return false
    return true
  })

  return (
    <section>
      <h2 style={{backgroundColor: "burlywood"}}><center>Blog</center></h2>
      <div className="d-flex gap-3">
        <input  className="form-control" placeholder="Search posts..." value={query} onChange={e=>setQuery(e.target.value)} />
        <select className="form-select" value={tag} onChange={e=>setTag(e.target.value)}>
          {tags.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between"}}>
        {filtered.map(b => (
          <article key={b.id} className="card" style={{width: "18rem"}}>
            <img src={b.image} className="card-img-top" alt={b.title} />
            <h3 className='card-title'>{b.title}</h3>
            <p className='card-text'>{b.excerpt}</p>
            <Link className='btn btn-primary' to={`/blog/${b.id}`}>Read More</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
