import React from 'react'
const Food = ({ food }) => {
    const style = {
        top: `${food[0]}%`,
        left: `${food[1]}%`
    }
    return (
        <div className='food' style={style}>

        </div>
    )
}

export default Food