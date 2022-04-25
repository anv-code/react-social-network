import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './../Dialogs.module.css';


const DialogItem = (props) => {
  const path = '/dialogs/' + props.id;

  return (
    <div className={style.dialog}>
      <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
