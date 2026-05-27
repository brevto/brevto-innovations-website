import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-gray-800 mt-12">
      <div className="container p-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Brevto Innovations Pvt Ltd
      </div>
    </footer>
  )
}
