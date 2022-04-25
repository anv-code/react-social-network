import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import style from './users.module.css';

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {

  return <div className={style.usersPage}>
    <Paginator currentPage={currentPage}
               onPageChanged={onPageChanged}
               totalItemsCount={totalUsersCount}
               pageSize={pageSize}
    />
    <div className={style.usersElements}>
      {users.map(u => <User user={u}
                            followingInProgress={props.followingInProgress}
                            key={u.id}
                            follow={props.follow}
                            unfollow={props.unfollow}
      />)}
    </div>
  </div>;
};

export default Users;
