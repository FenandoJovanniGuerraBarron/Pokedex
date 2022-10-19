import React from 'react'
import { Link } from 'react-router-dom'
import './styles/pokemon404.css'
const Pokemon404 = ({img}) => {
    return (
        <>
        <div className='error' >
            <Link to='/pokedex' ><img  className='error__img' src={img} alt="Hola" /></Link>
            <div className='color__white' ></div>
        </div>
        </>
    
    )
}

export default Pokemon404 