import Card from './Card'
import React from 'react'

export default {
  title: 'Card',
  component: Card,
}

export const defaultCard = () => (
  <Card
    radius="10"
    color="hotpink"
    question="What does React do?"
    answer="It helps us creating components"
    showAnswer
  />
)
