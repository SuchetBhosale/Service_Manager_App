import React, { useState } from 'react';
// If I later add real reCAPTCHA, use `react-google-recaptcha`
export default function ContactPage(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [submissions, setSubmissions] = useState([]) // stores in component state
  const [captchaChecked, setCaptchaChecked] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    if(!captchaChecked){
      alert('Please confirm reCAPTCHA (mock).')
      return
    }
    setSubmissions(prev => [...prev, {...form, id:Date.now()}])
    setForm({name:'', email:'', message:''})
    alert('Mock submitted — stored in memory.')
  }

  return (
    <section>
      <h2 style={{backgroundColor: "burlywood"}}><center>Contract</center></h2>
      <form onSubmit={handleSubmit} className="contact-form">
      <label for="name" class="col-sm-2 col-form-label">Name</label>
        <input className="form-control" id="name" placeholder="Name" required value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <input className="form-control" id="email" placeholder="Email" type="email" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <label for="message" class="col-sm-2 col-form-label">Message</label>
        <textarea className="form-control" id="message" placeholder="Message" required value={form.message} onChange={e=>setForm({...form, message:e.target.value})}/>
        {/* Mock reCAPTCHA toggle */}
        <label>
          <input  type="checkbox" checked={captchaChecked} onChange={e=>setCaptchaChecked(e.target.checked)} />
          I'm not a robot
        </label>
        <button className="form-control" type="submit">Send</button>
      </form>

      <div className="submissions">
        <h3>Previous submissions</h3>
        {submissions.length === 0 ? <p>No submissions yet.</p> : (
          <ul>{submissions.map(s => <li key={s.id}><b>{s.name}</b> — {s.email}: {s.message}</li>)}</ul>
        )}
      </div>
    </section>
  )
}
