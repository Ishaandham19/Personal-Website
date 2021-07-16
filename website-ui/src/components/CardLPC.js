import React from 'react'
import Card from 'react-bootstrap/Card'
import LPCLogo from './images/LPCLogo.png'

function CardEdLPC() {
    return (
      <Card className="bg-dark text-white" id="cardEd-body">
      <Card.Img src={LPCLogo} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title><b>Las Positas College </b><span className='dateTxt'> 2019 - 2021</span></Card.Title>
          <Card.Text>
            AS in Computer Science & Mathematics
          </Card.Text>
          <Card.Text><b>GPA - 4.0</b></Card.Text>
          <Card.Text>
            Alpha Gamma Sigma Honor Society (Officer) <br></br> Computer Science Club (Treasurer) <br></br> Math Club Member
          </Card.Text>
        </Card.ImgOverlay>
    </Card>
    )
}

export default CardEdLPC
 