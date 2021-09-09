import React from 'react'
import rgbToHex from './utils'
export default function SingleColor({ rgb, weight, index, type }) {
    //transform rgb to hex value
    const hex = rgbToHex(...rgb);
    let colorCls = "color";
    if (type === 'shade') {
        colorCls += ' color-light'
    }
    return (
        // dynamically add style to item
        <article className={colorCls} style={{ backgroundColor: hex }}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hex}</p>
        </article>
    )
}
