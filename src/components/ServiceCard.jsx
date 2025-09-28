import React from 'react';

export default function ServiceCard({service}){
  return (
    <article className="card" style={{width: "18rem"}}>
      <img src={service.image} className="card-img-top" alt={service.title} />
        <h3 className='card-title'>{service.title}</h3>
        <p className='card-text'>{service.description}</p>
          <span>₹{service.price}</span>
          <span className="category">{service.category}</span>
    </article>
  )
}
