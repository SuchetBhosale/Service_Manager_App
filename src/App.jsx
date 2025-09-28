import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './components/Hero.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import BlogList from './components/BlogList.jsx';
import BlogDetails from './components/BlogDetails.jsx';
import ContactPage from './components/ContactPage.jsx';

export default function App(){
  return (
    <>
      <NavBar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </>
  )
}
