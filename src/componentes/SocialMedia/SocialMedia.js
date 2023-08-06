import './SocialMedia.scss'

import facebookIcon from '../../assets-img/footer/facebook_icon_square.svg'
import InstagramIcon from '../../assets-img/footer/instagram_square_1.svg'
import LinkedinIcon from '../../assets-img/footer/linkedin_original_logo_square.svg'


const SocialMedia = () => {
  return (
    <>
        <div className='icones'>
            <h1>Sigam-nos nas redes sociais e fiquem por dentro das novidades</h1>
            <div className='imagem'>
            <a href={'#!'}><img src={facebookIcon} alt="" /></a>            
            <a href={'#!'}><img src={InstagramIcon} alt="" /></a>
            <a href={'#!'}><img src={LinkedinIcon} alt="" /></a>
            </div>
        </div>
    </>
  )
}

export default SocialMedia;
