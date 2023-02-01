import React from 'react';
import notfound from '../assets/img/notfound.jpg'

const NotFound = () => {
  return (
    <>
      <div className='notFound ms-5 me-5 text-center'>
        <img className='notfound-img' style={{width:'54%', opacity:'0.6'}}src={notfound} alt="error" />
        <h1 className='notfound-title'>ERROR</h1>
        <h2>PÁGINA NO ENCONTRADA</h2>
      </div>
    </>
  )
}

export default NotFound
