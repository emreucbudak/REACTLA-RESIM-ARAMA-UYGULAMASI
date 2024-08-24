import React from 'react'

function Tablo({ resim }) {
    console.log({resim})
    return (
        <div>
            <div className='gallery'>
                <img src={resim} alt="" />
            </div>
        </div>
    )
}

export default Tablo