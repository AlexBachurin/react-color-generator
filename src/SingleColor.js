import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
export default function SingleColor({ rgb, weight, type }) {
    //alert to inform user that color is succesfully copied to clipboard
    const [alert, setAlert] = useState(false);
    //transform rgb to hex value
    const hex = rgbToHex(...rgb);
    let colorCls = "color";
    if (type === 'shade') {
        colorCls += ' color-light'
    }

    // copy handler function
    const copyToClipboard = () => {
        setAlert(true);
        //copy to clipboard
        navigator.clipboard.writeText(hex)
    }
    //change alert to false in 3 seconds and clear it
    useEffect(() => {
        const timerId = setTimeout(() => {
            setAlert(false)
        }, 3000)

        return () => {
            clearTimeout(timerId);
        }
    }, [alert])
    return (
        // dynamically add style to item
        <article onClick={copyToClipboard} className={colorCls} style={{ backgroundColor: hex }}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hex}</p>
            {alert ? <p className='alert'>copied to clipboard</p> : null}
        </article>
    )
}
