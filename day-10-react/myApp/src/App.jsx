import React from 'react'
import Header from './components/Header'
import StudentList from './components/StudentList'
import Footer from './components/Footer'
import students from './data/students'

function App() {
  return (
    <div className="app">
      <Header studentCount={students.length} />
      <main className="container">
        <div className="section-heading">
          <h2>Meet Our Students</h2>
          <p>Get to know our students and their interests.</p>
        </div>
        <StudentList students={students} />
      </main>
      <Footer />
    </div>
  )
}

export default App
