import React from 'react';
import {NavLink} from 'react-router-dom';
import {Avatar, Button} from 'antd';
import style from './users.module.css';


const User = ({user, followingInProgress, unfollow, follow}) => {
  const statusView = () => {
    const str = user.status;

    if (typeof str == 'string' && str.length >= 25) {
      return str.slice(0, 25) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className={style.user}>
      <div className={style.userPhotoBlock}>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <div>
              {user.photos.small ? <img src={user.photos.small} alt='Avatar' className={style.userPhoto}/> :
                <Avatar className={style.userPhoto} size={100}>{user.name}</Avatar>}
            </div>
          </NavLink>
        </div>
        <div className={style.userButtons}>
          {user.followed
            ? <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              unfollow(user.id);
            }}>Отписаться</Button>
            : <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              follow(user.id);
            }}>Подписаться</Button>}
        </div>
      </div>
      <div className={style.userDescription}>
        <div><b>{user.name}</b></div>
        <div>{statusView()}</div>
        <Button className={style.userButtons}>Написать сообщение</Button>
      </div>
    </div>
  );
};

export default User;
