import {createField, InputForm} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import style from '../common/FormsControls/FormsControls.module.css';


export const LoginForm = ({handleSubmit, error, captchaUrl}) => { //1
  return (
    <form onSubmit={handleSubmit} className={style.formControl}>
      <h1>Login</h1>
      <div className={style.formInput}>
        {createField('Email', 'email', [required], InputForm)}
      </div>
      <div className={style.formSummaryErrorWrap}>
        {error && <div className={style.formSummaryError}>{error}</div>}
      </div>
      <div className={style.formInput}>
        {createField('Password', 'password', [required], InputForm, {type: 'password'})}
      </div>
      <div className={style.formSummaryErrorWrap}>
        {error && <div className={style.formSummaryError}>{error}</div>}
      </div>
      <div className={style.rememberMe}>
        <span>Remember me</span>
        {createField(null, 'rememberMe', [], InputForm, {type: 'checkbox'})}
      </div>
      {captchaUrl && <img alt='captcha' src={captchaUrl}/>}
      {captchaUrl && createField('Символы с изображения', 'captcha', [required], InputForm, {})}
      <button className={style.buttonSubmit}>Login</button>
    </form>
  );
};
