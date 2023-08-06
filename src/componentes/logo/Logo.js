import './Logo.scss';
import imagem from '../../assets-img/logo/logo.png'


const Logo = () => {
  return (
    <>
      <div className='logo'>
        <img src={imagem} alt="logo"/>
      </div>
    </>
  )
}

export default Logo
