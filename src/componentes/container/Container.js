import React from 'react'
import banner from '../../assets-img/pratos/banner.png'
import './Container.scss'


const Container = () => {
  return (
    <>
      <div className='container'>
        <img src={banner} alt='banner'/>
      </div>
    </>
  )
}

export default Container