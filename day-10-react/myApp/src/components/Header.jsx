import React from 'react'
function Header({ studentCount }) {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>Student Profile Cards</h1>
          <p>A simple student directory</p>
        </div>
        <span className="student-count">{studentCount} Students</span>
      </div>
    </header>
  )
}

export default Header
