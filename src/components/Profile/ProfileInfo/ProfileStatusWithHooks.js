import React, {useEffect, useState} from 'react';
import {Input} from 'antd';
import style from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!props.isOwner &&
        <div className={style.profileStatus}>
          <span>{props.status || 'Статус не установлен'}</span>
        </div>
      }

      {!editMode && props.isOwner &&
        <div className={style.profileStatusOwner}>
          <span onClick={activateEditMode}>{props.status || 'Установить статус'}</span>
        </div>
      }

      {editMode &&
        <div>
          <Input onChange={onStatusChange}
                 autoFocus={true}
                 onBlur={deactivateEditMode}
                 value={status}/>
        </div>
      }
    </div>
  );
};

export default ProfileStatusWithHooks;
