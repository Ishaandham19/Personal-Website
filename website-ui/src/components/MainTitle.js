import React from 'react'

export default function MainTitle() {
    const mainTitle = ['I', 's', 'h', 'a', 'a', 'n', ' ' ,'D', 'h', 'a', 'm']

    return (
        <p id="text">
            {mainTitle.map(char =>
                <span className="title-char">{char}</span>
            )}
        </p>
    )
}
