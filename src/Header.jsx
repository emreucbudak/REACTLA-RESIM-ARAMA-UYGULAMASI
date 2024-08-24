import React, { useState } from 'react'

function Header({search}) {
    const [veri,editVeri] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        search(veri)
    }
    const handleChange = (event) => {
        editVeri(event.target.value)
        // Önceki projelerdede event.target.value yü kullanmıştık formdan veri alırken hep bunu kullanıyoruz unutmak yok
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='input'>
                <h2 className='baslik'>Ne Aradınız</h2>
                <input type="text" value={veri} onChange={handleChange}/>
                <button type="submit" className='buton'>Submit</button>
            </form>
        </div>
    )
}

export default Header