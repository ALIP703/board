import React from 'react'
import './PageSignIn.scss'
import SocialMediaComponent from '../../../components/social-media/SocialMediaComponent'
import { SOCIAL_MEDIA_ICONS } from '../../../utils/helpers/constants/Constants'
import GoogleIcon from "../../../assets/google.svg"
import AppleIcon from "../../../assets/apple.svg"
import Button from '../../../components/buttons/general-button/Button'
import { Link } from "react-router-dom"

const PageSignIn: React.FC = () => {
  return (
    <div className='sign-in-page'>
      <div className='geometry-section' >
        <div className='logo'> LOGO </div>
        <h1 className='title'> Board </h1>
        <div className="social-media-wrapper">
          <SocialMediaComponent icons={SOCIAL_MEDIA_ICONS} />
        </div>
      </div>
      <div className='form-section'>
        <div className="form-container">
          <div className='form-title-section'>
            <h2>Sign in</h2>
            <p>Sign in to your account</p>
          </div>
          <div className="signing-btn-section">
            <Button
              icon={GoogleIcon}
              title="Sign in with google"
              handleClick={() => { }}
              style={{ width: '100%' }}
            />
            <Button
              icon={AppleIcon}
              title="Sign in with apple"
              handleClick={() => { }}
              style={{ width: '100%' }}

            />
          </div>
          <div className="form-card">
            <form className='form'>
              <div className='form-field-wrapper'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' placeholder='johndoe@gmail.com' autoComplete='new-password' />
              </div>
              <div className='form-field-wrapper'>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' placeholder='password' />
              </div>
              <Link to="#">Forgot password?</Link>
              <Button
                title='SignIn'
                color='primary'
                style={{
                  width: '100%',
                }}
                handleClick={() => { }} />
            </form>
          </div>

          <div>
            <p className="sign-up-link">
              <span>
                Don’t have an account? <a href='/register'> Register here</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageSignIn