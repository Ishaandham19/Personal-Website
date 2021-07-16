import React from 'react'
import Card from 'react-bootstrap/Card'
import BerkeleyLogo from './images/berkeleyLogo.png'

function CardEdUCB() {
    return (
      <Card className="bg-dark text-white" id="cardEd-body">
      <Card.Img src={BerkeleyLogo} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title><b>UC Berkeley </b><span className='dateTxt'> 2021 - 2023</span></Card.Title>
          <Card.Text>
            <p>Bachelors of Arts in Computer Science</p>
          </Card.Text>
          <Card.Text>
            <p></p>
          </Card.Text>
        </Card.ImgOverlay>
    </Card>
    )
}

export default CardEdUCB
