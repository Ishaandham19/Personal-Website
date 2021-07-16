import React from 'react'
import CardEdUCB from './CardUCB'
import CardEdLPC from './CardLPC'
import SubTitle from './SubTitle'

function EducationPage() {
    return (
        <div id="educationPage">
             <SubTitle title="Education"></SubTitle>
            <div className="cardEd-container">
                <CardEdUCB></CardEdUCB>
                <CardEdLPC></CardEdLPC>
            </div>
        </div>
    )
}

export default EducationPage
