import './BarraDePesquisa.scss'

import enviar from '../../assets-img/footer/icone_de_envio.png'

const BarraDePesquisa = () => {

  return (
    <div className="newslatter">
        <img className='icone' src={enviar} alt="Enviar" />
        <label>Assine nossa newsletter</label>
        <input type="text" placeholder='Digite seu endereço de E-mail'/>
        <button>Enviar</button>
    </div>
  )
}

export default BarraDePesquisa
