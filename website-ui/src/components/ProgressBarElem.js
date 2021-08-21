import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

function ProgressBarElem() {
    const barElems = [
        {name:'Python',value: 90},
        {name:'C++',value: 90},
        {name:'HTML/CSS/JS',value: 70},
        {name:'React',value: 65},
        // {name:'Java',value: 60},
        // {name:'Machine Learning',value: 20},
        // {name:'Assembly Language',value: 60},
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

