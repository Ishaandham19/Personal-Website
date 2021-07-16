import React from 'react'
import Card from 'react-bootstrap/Card'
import SubTitle from './SubTitle'

function CardElem(prop) {
    return (
        <Card variant="dark" id="cardElem">
          <SubTitle title="About Me"></SubTitle>
        <Card.Body id="cardElemBody">
          <Card.Text>
            {prop.text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardElem
