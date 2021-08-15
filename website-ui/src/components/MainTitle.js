import React from 'react'
import HomeIcons from './HomeIcons'

export default function MainTitle() {
    const mainTitle = "Ishaan Dham"
    const subTitle = 'Student Software Developer'

    return (
        <div id="mainTitle">
            <h1 id="text">
            {mainTitle.split("").map(char =>
                <span>{char}</span>
            )}
            </h1>
            <h3 id="subText">
            {subTitle.split("").map(char =>
                <span>{char}</span>
            )}
            </h3>
            <HomeIcons></HomeIcons>
        </div>
    )
}
