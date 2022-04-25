import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu} from 'antd';
import {
  UserOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import style from './Navbar.module.css';


const Navbar = () => {
  return (
    <>
      <nav className={style.nav}>
        <Menu mode='inline'>
          <Menu.Item key='1' icon={<UserOutlined/>} className={style.menuItem}><NavLink to='/profile'
                                                                                        activeClassName={style.activeLink}><label>Профиль</label></NavLink></Menu.Item>
          <Menu.Item key='2' icon={<TeamOutlined/>} className={style.menuItem}><NavLink to='/users'
                                                                                        activeClassName={style.activeLink}><label>Пользователи</label></NavLink></Menu.Item>
          {/*<Menu.Item key='3' icon={<MessageOutlined />}><NavLink to="/dialogs" activeClassName={style.activeLink}>Сообщения</NavLink></Menu.Item>*/}
          {/*<Menu.Item key='4' icon={<LoginOutlined />}><NavLink to="/login" activeClassName={style.activeLink}>Login</NavLink></Menu.Item>*/}
        </Menu>
      </nav>
    </>
  );
};

export default Navbar;
