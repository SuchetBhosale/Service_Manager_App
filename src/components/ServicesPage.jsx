import React, {useEffect, useState} from 'react';
import ServiceCard from './ServiceCard';
import servicesData from '../data/services.json';

export default function ServicesPage(){
  const [services, setServices] = useState([])
  const [query, setQuery] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(()=> setServices(servicesData), [])

  const categories = ['All', ...Array.from(new Set(servicesData.map(s=>s.category)))]

  const filtered = services.filter(s=>{
    if(category !== 'All' && s.category !== category) return false
    if(minPrice && s.price < Number(minPrice)) return false
    if(query && !s.title.toLowerCase().includes(query.toLowerCase())) return false
    return true
  })

  return (
    <section>
      <h2 style={{backgroundColor: "burlywood"}}><center>Services</center></h2>
      <div className="d-flex gap-3" >
        <input className="form-control" placeholder="Search services..." value={query} onChange={e=>setQuery(e.target.value)} />
        <select className="form-select" value={category} onChange={e=>setCategory(e.target.value)}>
          {categories.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
        <input className="form-control" placeholder="Min price" type="number" value={minPrice} onChange={e=>setMinPrice(e.target.value)} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between"}}>
        {filtered.map(s =>  <ServiceCard className="col-md-4 mb-4" style={{width: "18rem"}} key={s.id} service={s} />)}
        {filtered.length === 0 && <p>No services found.</p>}
      </div>
    </section>
  )
}
