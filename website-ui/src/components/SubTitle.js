import React from 'react'


function SubTitle(prop) {
    return (
        <div className="subTitle">
            <h1>
                {prop.title.split("").map(char =>
                    <span>{char}</span>
                )}
            </h1>
        </div>
    )
}

export default SubTitle
