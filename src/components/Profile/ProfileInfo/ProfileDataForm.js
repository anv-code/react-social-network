import React from 'react';
import {reduxForm} from 'redux-form';
import {createField, InputForm, Textarea} from '../../common/FormsControls/FormsControls';
import {Button} from 'antd';
import styleForms from './../../../components/common/FormsControls/FormsControls.module.css';
import style from './ProfileInfo.module.css';


const ProfileDataForm = ({handleSubmit, profile, error, cancel}) => {
  return <form onSubmit={handleSubmit} className={style.profileDataForm}>
    {error && <div className={styleForms.formSummaryError}>
      {error}
    </div>}
    <div className={style.profileDataRow}>
      <p>Имя:</p>
      {createField('Full name', 'fullName', [], InputForm)}
    </div>
    <div className={style.profileDataRow}>
      <p>В поисках работы:</p>
      {createField('', 'lookingForAJob', [], InputForm, {type: 'checkbox'})}
    </div>
    <div className={style.profileDataRow}>
      <p>Мои профессиональные навыки:</p>
      {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
    </div>
    <div className={style.profileDataRow}>
      <p>Обе мне:</p>
      {createField('About me', 'aboutMe', [], Textarea)}
    </div>
    <div className={style.contacts}>
      {Object.keys(profile.contacts).map(key => {
        return <div>
          <p>{key}: {createField(key, 'contacts.' + key, [], InputForm)}</p>
        </div>;
      })}
    </div>
    <div className={style.profileDataFormButtons}>
      <Button htmlType='submit' type='primary'>Сохранить изменения</Button>
      <Button onClick={cancel} type='default'>Отмена</Button>
    </div>
  </form>;
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
