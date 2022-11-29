import React from 'react'
import './styles.css'
import { BsCheck2 } from 'react-icons/bs'

const Add = () => {
  return (
    <div className='main-container'>
      <h2>Agregar cuenta</h2>
      <h3>Selecciona tu institución financiera de confianza</h3>
      <div className='radio-buttons'>
        <label className='custom-radio'>
          <input type='radio' name='radio' />
          <span className='radio-btn'>
            {/* <i className="las la-check"></i> */}
            <div className='hobbies-icon banco-industrial'>
              <img
                width={129}
                height={49}
                src='https://soyfri.com/wp-content/uploads/2022/04/Logo-Bi-horizontal-2.webp'
                alt='Banco Industrial'
              />
            </div>
          </span>
        </label>
        <label className='custom-radio'>
          <input type='radio' name='radio' />
          <span className='radio-btn'>
            {/* <i className="las la-check"></i> */}
            <div className='hobbies-icon gyt'>
              <img
                width={159}
                height={49}
                src='https://soyfri.com/wp-content/uploads/2020/09/GyT.png'
                alt='Banco GyT Continental'
              />
            </div>
          </span>
        </label>
        <label className='custom-radio'>
          <input type='radio' name='radio' />
          <span className='radio-btn'>
            {/* <i className="las la-check"></i> */}
            <div className='hobbies-icon banrural'>
              <img
                width={149}
                height={49}
                src='https://www.banrural.com.gt/site/BanruralCorp/_cache_016b/_themesdelivery/BanruralCorpTheme/assets/img/logo_banrural.png'
                alt='Banrural'
              />
            </div>
          </span>
        </label>
        <label className='custom-radio'>
          <input type='radio' name='radio' />
          <span className='radio-btn'>
            {/* <i className="las la-check"></i> */}
            <div className='hobbies-icon bac'>
              <img
                width={149}
                // height={40}
                src='https://www.baccredomatic.com/themes/custom/bac_theme/images/logo.png'
              />
            </div>
          </span>
        </label>
      </div>
    </div>
  )
}

export default Add
