import React from 'react'
function StudentCard({ student }) {
  return (
    <div className="student-card">
      <img className="student-photo" src={student.photo} alt={student.name} />
      <h3>{student.name}</h3>
      <p className="student-id">Student ID: {student.id}</p>
      <div className="card-info">
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Email:</strong> <a href={`mailto:${student.email}`}>{student.email}</a></p>
        <p><strong>Skill:</strong> <span className="skill-badge">{student.skill}</span></p>
      </div>
    </div>
  )
}

export default StudentCard
