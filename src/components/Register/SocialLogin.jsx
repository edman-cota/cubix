import React from 'react'
import './socialLogin.scss'
import { Google } from '../Icons/Google'

const SocialLogin = () => {
  return (
    <div className='social-login__wrapper'>
      <ul>
        <li>
          <button>
            <Google />
            <p>Sign up with Google</p>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default SocialLogin
