import React from 'react'
const Snake = ({ snakePieces }) => {
    return (
        <div>
            {snakePieces.map((piece, i) => {
                const style = {
                    left: `${piece[0]}%`,
                    top: `${piece[1]}%`
                }
                return <div key={i} className='snake-piece' style={style}></div>
            })}
        </div>
    )
}

export default Snake


