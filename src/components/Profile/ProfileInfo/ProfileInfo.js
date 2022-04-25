import React, {useState} from 'react';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import {Avatar} from 'antd';
import style from './ProfileInfo.module.css';


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return null;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  const cancel = () => {
    setEditMode(false);
  };

  return (
    <div className={style.profileBlock}>
      <div className={style.profilePhoto}>
        {profile.photos.large ? <img alt='Avatar' src={profile.photos.large}/> :
          <Avatar size={200}>{profile.fullName}</Avatar>}
        <div className={style.profileDataName}>
          <b>{profile.fullName}</b>
        </div>
        {isOwner && <div className={style.profileOwner}>
          <label className={style.profilePhotoInput}><input type={'file'} onChange={onMainPhotoSelected}/>
            Изменить фотографию
          </label>
          <button onClick={() => {
            setEditMode(true);
          }}>Редактировать профиль
          </button>
        </div>}
      </div>
      <div className={style.descriptionBlock}>
        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} cancel={cancel}/>
          : <ProfileData profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus}/>}
      </div>
    </div>
  );
};

const ProfileData = ({profile, status, updateStatus, isOwner}) => {
  return <div className={style.profileData}>
    <ProfileStatusWithHooks isOwner={isOwner} status={status} updateStatus={updateStatus}/>
    <div className={style.profileDataBlock}>
      <div className={style.profileDataRow}>
        <b>В поиске работы:</b> {profile.lookingForAJob ? 'Да' : 'Нет'}
      </div>
      {profile.lookingForAJob &&
        <div className={style.profileDataRow}>
          <b>Мои профессиональные навыки:</b> {profile.lookingForAJobDescription}
        </div>}
      {profile.aboutMe && <div>
        <b>Обо мне:</b> {profile.aboutMe}
      </div>
      }
      <div>
        {Object.keys(profile.contacts).map(key => {
          if (profile.contacts[key] ?? null) {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  </div>;
};

const Contact = ({contactTitle, contactValue}) => {
  return <div className={style.contact}><b>{contactTitle}: </b>{contactValue}</div>;
};

export default ProfileInfo;
