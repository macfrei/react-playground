import './Card.css'
import React from 'react'

export default function Card({ question, answer, color, radius, showAnswer }) {
  function getRandomText() {
    return Math.random() > 0.8 ? 'Unlikely' : 'Likely'
  }

  return (
    <section
      style={{ backgroundColor: color, borderRadius: `${radius}px` }}
      className="Card"
    >
      <h2>{question}</h2>
      {showAnswer && <p>{answer}</p>}
      <input placeholder={getRandomText().toUpperCase()} />
    </section>
  )
}
