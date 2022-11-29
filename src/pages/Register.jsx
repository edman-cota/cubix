import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/register.scss'
import SocialLogin from '../components/Register/SocialLogin'

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(
          'Por favor, introduce un formato de correo electrónico válido como ejemplo@email.com',
        )
        .required('Correo electrónico requerido '),
      password: Yup.string()
        .required('Contraseña requerido')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
        ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className='App'>
      <div className='left-panel'></div>
      <div className='right-panel'>
        <div className='right-panel__wrapper'>
          <h2>Create your free account</h2>
          <SocialLogin />
          <div className='devider'>
            <span></span>
            <div>or</div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Correo electrónico'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='errors-container'>{formik.errors.email}</div>
            ) : null}

            <input
              id='password'
              name='password'
              type='password'
              placeholder='Contraseña'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='errors-container'>{formik.errors.password}</div>
            ) : null}

            <button type='submit'>Sign up with email</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
