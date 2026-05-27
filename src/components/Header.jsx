import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="border-b border-gray-800">
      <div className="container p-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold">Brevto</Link>
        <nav>
          <Link to="/products" className="mr-4 text-sm">Products & Services</Link>
          <a href="#contact" className="text-sm">Contact</a>
        </nav>
      </div>
    </header>
  )
}
