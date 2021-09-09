import React from 'react'
import rgbToHex from './utils'
export default function SingleColor({ rgb, weight, index }) {
    //transform rgb to hex value
    const hex = rgbToHex(...rgb);
    return (
        // dynamically add style to item
        <article className="color" style={{ backgroundColor: hex }}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hex}</p>
        </article>
    )
}
