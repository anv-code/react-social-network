import React from 'react';
import {NavLink} from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import {LogoutOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import style from './Header.module.css';


const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.logoBlock}>
        <span className={style.logoImage}></span>
        <span>React</span>
      </div>
      <div className={style.headerPreloader}>
        {props.isFetching ? <Preloader/> : null}
      </div>
      <div className={style.loginBlock}>
        {props.isAuth ?
          <div>{props.login} - <Button icon={<LogoutOutlined/>} onClick={props.logout}>Выйти</Button></div>
          : <Button type='primary' className={style.button}><NavLink
            to={'/login'}>Войти</NavLink></Button>
        }
      </div>
    </header>
  );
};

export default Header;
