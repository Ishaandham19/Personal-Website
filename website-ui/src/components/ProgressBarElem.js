import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

function ProgressBarElem() {
    const barElems = [
        {name:'Python',value: 90},
        {name:'C++/Golang/Java',value: 75},
        {name:'HTML/CSS/JS',value: 70},
        {name:'Docker/Kubernetes', value: 65},
        {name:'React',value: 65},
        {name:'Node.js/Express',value: 65}
    ]
    return (
        <div className="skillsProgressbar">
              <div className="progressBar">
                {barElems.map(elem =>
                    <div className="progressBarSingle">
                    <lable className="progressBarTitle">{elem.name}</lable>
                    <ProgressBar id="bar" now={elem.value}></ProgressBar>
                    </div>
                )}
             </div>
        </div>
    )
}

export default ProgressBarElem

