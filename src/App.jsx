import React from 'react'
import AppHeader from './components/AppHeader'
import Card from './components/Card'

export default function App() {
  return (
    <>
      <AppHeader title="React App" />
      <Card
        radius="10"
        color="hotpink"
        question="What does React do?"
        answer="It helps us creating components"
        showAnswer
      />
      <Card
        color="#c0ffee"
        question="What is JSX?"
        answer="It is pseudo HTML to create elements in JS"
      />
      <Card
        radius="40"
        color="rgb(100, 150, 180)"
        question="Can I create my own HTMLElements?"
        answer="Kind of"
        showAnswer
      />
    </>
  )
}
