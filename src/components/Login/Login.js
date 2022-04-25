import React from 'react';
import {Redirect} from 'react-router-dom';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {LoginForm} from './LoginForm';
import style from './Login.module.css';


const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to='/profile'/>;
  }

  return <div className={style.loginForm}>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
  </div>;
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);

